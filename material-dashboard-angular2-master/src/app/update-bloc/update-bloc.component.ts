import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations'; // Ajout de l'import pour les animations
import { Bloc } from 'app/Bloc/bloc.module';
import { BlocService } from 'app/service-bloc.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css'],
  animations: [ // Ajout de l'animation dans le décorateur du composant
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1200ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('1200ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class UpdateBlocComponent implements OnInit {
  idBloc: number;
  bloc: Bloc = new Bloc();
  blocForm: FormGroup;

  constructor(
    private blocService: BlocService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.idBloc = this.route.snapshot.params['idBloc'];

    this.blocForm = this.formBuilder.group({
      nomBloc: ['', Validators.required],
      capaciteBloc: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    this.blocService.getBlocById(this.idBloc).subscribe((data) => {
      this.blocForm.patchValue({
        nomBloc: data.nomBloc,
        capaciteBloc: data.capaciteBloc,
      });
    }, (error) => console.log(error));
  }

  onSubmit() {
    this.blocService.modifyBloc(this.idBloc, this.blocForm.value).subscribe(
      (data) => {
        this.goToBloc();
      },
      (error) => console.log(error)
    );
  }

  goToBloc(){
    this.router.navigate(['/bloc']);
  }
  generatePDF() {
    const doc = new jsPDF();
  
    doc.setFont('helvetica');
    doc.setFontSize(12);
  
    // Create an HTML canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
   
  
    
  
      // Add the text
      doc.text('Nom: ' + this.blocForm.value.nomBloc, 20, 80);
      doc.text('Adresse: ' + this.blocForm.value.capaciteBloc, 20, 90);
    
  
      // Save the PDF
      doc.save('formulaire_bloc.pdf');
    }
}

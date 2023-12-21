
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { Bloc } from 'app/Bloc/bloc.module';
import { BlocService } from 'app/service-bloc.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-create-bloc',
  templateUrl: './create-bloc.component.html',
  styleUrls: ['./create-bloc.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1200ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('1200ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class CreateBlocComponent implements OnInit {
  blocForm: FormGroup;
  bloc: Bloc = new Bloc();
  animationState: string = 'in';

  constructor(public blocservice: BlocService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.blocForm = this.formBuilder.group({
      nomBloc: ['', [Validators.required, Validators.maxLength(20)]],
      capaciteBloc: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  saveBloc() {
    this.blocservice.addBloc(this.bloc).subscribe(data => {
      console.log(data);
      this.goToBloc();
    },
    error => console.log(error));
  }

  goToBloc() {
    this.router.navigate(['/Bloc']);
  }

  onSubmit() {
    if (this.blocForm.valid) {
      this.bloc.nomBloc = this.blocForm.controls.nomBloc.value;
      this.bloc.capaciteBloc = this.blocForm.controls.capaciteBloc.value;
      console.log(this.bloc);
      this.saveBloc();
      this.animationState = this.animationState === 'in' ? 'out' : 'in';
    } else {
      console.log('Form is invalid');
    }
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

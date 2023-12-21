import { Component, OnDestroy, OnInit } from '@angular/core';
import { Foyer } from 'app/foyer';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoyerService } from 'app/foyer.service';
import { Router } from '@angular/router';
import { Observable,Subscription,catchError } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-create-foyer',
  templateUrl: './create-foyer.component.html',
  styleUrls: ['./create-foyer.component.css'],
  animations: [ // Ajout de l'animation dans le décorateur du composant
  trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('1200ms', style({ opacity: 1 }))]),
    transition(':leave', [animate('1200ms', style({ opacity: 0 }))]),
  ])
]
})
export class CreateFoyerComponent  implements OnInit{
  //foyer: Foyer = new Foyer();
  foyerForm: FormGroup;
 


  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private foyerService: FoyerService,
    private formBuilder: FormBuilder
  ){
    this.foyerForm=this.formBuilder.group({
      nomFoyer:['',[Validators.required, Validators.minLength(2)]],
      capaciteFoyer:[null, Validators.required],
      //idF:[null, [Validators.required, Validators.pattern('[0-4]{2}')]],

    });
    
  }

  ngOnInit(): void {


  }
  saveFoyer() {
    const newFoyer: Foyer = this.foyerForm.value;
    this.foyerService.addFoyer(newFoyer).subscribe(
      (data) => {
        console.log(data);
        this.goToFoyerList();
      },
      (error) => console.log(error)
    );
  }
  goToFoyerList() {
    this.router.navigate(['/foyer']);
  }
  OnSubmit(){
    
    if (this.foyerForm.valid) {
    
      console.log(this.foyerForm.value);
      this.saveFoyer();
    } else {
      console.log('Le formulaire n\'est pas valide. Veuillez remplir tous les champs correctement.');
    }}
    //this.saveFoyer();
    generatePDF() {
      const doc = new jsPDF();
    
      doc.setFont('helvetica');
      doc.setFontSize(12);
    
      // Create an HTML canvas element
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
    
     
    
      
    
        // Add the text
        doc.text('Nom: ' + this.foyerForm.value.nomFoyer, 20, 80);
        doc.text('Adresse: ' + this.foyerForm.value.capaciteFoyer, 20, 90);
      
    
        // Save the PDF
        doc.save('formulaire_bloc.pdf');
      }
  }
  
  
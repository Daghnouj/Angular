import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChambreService } from 'app/chambre.service';
import { Chambre } from 'app/chambre/chambre.module';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-create-chambre',
  templateUrl: './create-chambre.component.html',
  styleUrls: ['./create-chambre.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class CreateChambreComponent implements OnInit {

  chambreForm: FormGroup;
  chambre: Chambre = new Chambre();

  constructor(public chambreservice: ChambreService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.chambreForm = this.formBuilder.group({
      typeC: ['', Validators.required],
      numeroChambre: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  saveChambre() {
    this.chambreservice.addChambre(this.chambre).subscribe(data => {
      console.log(data);
      this.goToChambre();
    },
      error => console.log(error));
  }

  goToChambre() {
    this.router.navigate(['/chambres']);
  }

  onSubmit() {
    if (this.chambreForm.valid) {
      this.chambre.numeroChambre = this.chambreForm.controls.numeroChambre.value;
      this.chambre.typeC = this.chambreForm.controls.typeC.value;
      console.log(this.chambre);
      this.saveChambre();
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
      doc.text('Nom: ' + this.chambreForm.value.typeC, 20, 80);
      doc.text('Adresse: ' + this.chambreForm.value.numeroChambre, 20, 90);
    
  
      // Save the PDF
      doc.save('formulaire_chambre.pdf');
    }
}
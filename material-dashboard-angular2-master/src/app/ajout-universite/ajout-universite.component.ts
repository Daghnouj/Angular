import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'app/shared.service';
import { UniversiteModule } from 'app/universite/universite.module';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-ajout-universite',
  templateUrl: './ajout-universite.component.html',
  styleUrls: ['./ajout-universite.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class AjoutUniversiteComponent implements OnInit {
  universiteForm: FormGroup;
  universite: UniversiteModule = {};

  animationState: string = 'in';

  constructor(
    public sharedservice: SharedService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.universiteForm = this.formBuilder.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required],
    });
  
  }
  generatePDF() {
    const doc = new jsPDF();
  
    doc.setFont('helvetica');
    doc.setFontSize(12);
  
    // Create an HTML canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
   
  
    
  
      // Add the text
      doc.text('Nom: ' + this.universiteForm.value.nomUniversite, 20, 80);
      doc.text('Adresse: ' + this.universiteForm.value.Adresse, 20, 90);
    
  
      // Save the PDF
      doc.save('formulaire_universite.pdf');
    };
  
  
  
  
  saveUniversite() {
    if (this.universiteForm.valid) {
      const formValues = this.universiteForm.value;
  
      // Handle the case where adresseUniversite is null
      const adresseValue = formValues.adresse || '';
  
      this.universite = {
        nomUniversite: formValues.nomUniversite,
        adresse: adresseValue,
      };
  
      console.log('Form Values:', formValues);
      console.log('Universite Object:', this.universite); // Log the universite object
  
      this.sharedservice.addUniversite(this.universite).subscribe(
        (data) => {
          console.log('Server Response:', data);
          this.goToUniversite();
        },
        (error) => console.log('Error:', error)
      );
    } else {
      console.log('Form is invalid');
    }
  }
  

  goToUniversite() {
    this.router.navigate(['/Universite']);
  }

  onSubmit() {
    if (this.universiteForm.valid) {
      const formValues = this.universiteForm.value;
      this.universite = {
        nomUniversite: formValues.nomUniversite,
        adresse: formValues.adresseUniversite,
      };

      console.log('Submitted Universite:', this.universite);

      this.saveUniversite();
      this.animationState = this.animationState === 'in' ? 'out' : 'in';
    } else {
      console.log('Form is invalid');
    }
  }
}

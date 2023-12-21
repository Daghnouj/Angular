
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from 'app/chambre.service';
import { Chambre } from 'app/chambre/chambre.module';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.css'],

 animations: [
    trigger('moveInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class UpdateChambreComponent implements OnInit {

  idChambre: number;
  chambre: Chambre = new Chambre();
  chambreForm: FormGroup;

  constructor(
    private chambreservice: ChambreService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.idChambre = this.route.snapshot.params['idChambre'];

    this.chambreForm = this.formBuilder.group({
      numeroChambre: ['', Validators.required],
      typeC: ['', Validators.required],
    });

    this.chambreservice.getChambreById(this.idChambre).subscribe((data) => {
      this.chambreForm.patchValue({
        numeroChambre: data.numeroChambre,
        typeC: data.typeC,
      });
    }, (error) => console.log(error));
  }

  onSubmit() {
    this.chambreservice.modifyChambre(this.idChambre, this.chambreForm.value).subscribe(
      (data) => {
        this.goToChambre();
      },
      (error) => console.log(error)
    );
  }

  goToChambre() {
    this.router.navigate(['/chambres']);
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

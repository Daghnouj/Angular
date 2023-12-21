// update-etudiant.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'app/etudiant';
import { EtudiantService } from 'app/etudiant.service';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { trigger, state, transition, style, animate } from '@angular/animations';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('1s ease-in-out')
      ]),
    ]),
  ],
})
export class UpdateEtudiantComponent implements OnInit {
  idEtudiant: number;
  etudiant: Etudiant = new Etudiant();
  photo: File;
  image: string;
  etudiantForm: FormGroup;
  successMessage: string = '';
  showSuccessAnimation: boolean = false;

  constructor(
    private etudiantService: EtudiantService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.idEtudiant = this.route.snapshot.params['idEtudiant'];
    this.etudiantForm = this.formBuilder.group({
      nomEt: ['', Validators.required],
      prenomEt: ['', Validators.required],
      cin: ['', [Validators.required, Validators.pattern(/^\d{1,8}$/)]],
      ecole: ['', Validators.required],
      dateNaissance: ['', [Validators.required, this.ageValidator]],
    });

    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe(
      data => {
        this.etudiant = data;
        this.etudiantForm.patchValue(this.etudiant);
        this.image = this.getImage(this.etudiant);
      },
      error => console.error(error)
    );
  }

  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    return age > 18 ? null : { 'invalidAge': true };
  }

  onSubmit() {
    if (this.etudiantForm.valid) {
      console.log('Form Data:', this.etudiantForm.value);
      
      // Continue with the update request
      this.etudiantService.updateEtudiant(this.idEtudiant, this.etudiantForm.value).subscribe(
        data => {
          this.successMessage = 'Mise à jour réussie !';
          this.showSuccessAnimation = true;
          this.goToEtudiantList();
        },
        error => console.error(error)
      );
    } else {
      this.etudiantForm.markAllAsTouched();
    }
  }
  

  goToEtudiantList() {
    this.router.navigate(['/etudiant']);
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      console.log('Selected File:', this.photo);
      
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
        console.log('Image updated:', this.image);
      };
      reader.readAsDataURL(this.photo);
    }
  }
  
  

  getImage(etudiant: Etudiant) {
    if (etudiant && etudiant.image && etudiant.image.data) {
      const base64Data = etudiant.image.data;
      return 'data:image/jpeg;base64,' + base64Data;
    } else {
      return ''; // or any default image URL or placeholder
    }
  }

generatePDF() {
  const doc = new jsPDF();

  doc.setFont('helvetica');
  doc.setFontSize(12);

  // Ajouter l'image
 // const imgData = this.getImage(this.etudiant); // Utilisez la méthode correcte
  //doc.addImage(imgData, 'JPEG', 20, 70, 50, 50); // X, Y, largeur, hauteur

  // Ajouter le texte
  doc.text('Nom: ' + this.etudiantForm.value.nomEt, 20, 20);
  doc.text('Prénom: ' + this.etudiantForm.value.prenomEt, 20, 30);
  doc.text('Cin: ' + this.etudiantForm.value.cin, 20, 40);
  doc.text('Ecole: ' + this.etudiantForm.value.ecole, 20, 50);
  doc.text('Date de naissance: ' + this.etudiantForm.value.dateNaissance, 20, 60);

  doc.save('formulaire_etudiant.pdf');
}
}
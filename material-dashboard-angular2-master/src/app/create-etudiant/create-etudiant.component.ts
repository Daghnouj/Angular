import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'app/etudiant';
import { EtudiantService } from 'app/etudiant.service';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { jsPDF } from 'jspdf';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-create-etudiant',
  templateUrl: './create-etudiant.component.html',
  styleUrls: ['./create-etudiant.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(900)
      ]),
      transition('* => void', [
        animate(900, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CreateEtudiantComponent implements OnInit {
  etudiantForm: FormGroup;
  etudiant: Etudiant = new Etudiant();
  photo: File;
  image: string;
  base64Data: Uint8Array;
  retrievedImage: string;
  
  formData: {
    nomEt: string;
    prenomEt: string;
    cin: number;
    ecole: string;
    dateNaissance: Date;
    // Ajoutez d'autres champs au besoin
  } = {
    nomEt: '',
    prenomEt: '',
    cin: null,
    ecole: '',
    dateNaissance: null,
  };

  constructor(
    public etudiantService: EtudiantService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private ng2ImgMaxService: Ng2ImgMaxService
  ) { }

  ngOnInit(): void {
    this.etudiantForm = this.formBuilder.group({
      nomEt: ['', [Validators.required, Validators.maxLength(20)]],
      prenomEt: ['', [Validators.required, Validators.maxLength(20)]],
      cin: ['', [Validators.required, Validators.maxLength(8), Validators.pattern('^[0-9]{1,8}$')]],
      ecole: ['', [Validators.required, Validators.maxLength(20)]],
      dateNaissance: ['', [Validators.required, this.ageValidator]]
    });
  }
  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    // Votre logique pour valider l'âge (> 18 ans)
    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();

    if (age > 18) {
      return null; // L'âge est valide
    } else {
      return { 'invalidAge': true }; // L'âge n'est pas valide
    }
  }

  saveEtudiant() {
    const formData = new FormData();
    formData.append('image', this.photo);

    const etudiantData = {
      nomEt: this.etudiant.nomEt,
      prenomEt: this.etudiant.prenomEt,
      cin: this.etudiant.cin,
      ecole: this.etudiant.ecole,
      dateNaissance: this.etudiant.dateNaissance,
    };

    formData.append('etudiant', JSON.stringify(etudiantData));

    this.etudiantService.CreateEtudiant(formData).subscribe(
      (data) => {
        console.log(data);
        this.goToEtudiant();
       
      },
      (error) => console.log(error)
    );
  }

  goToEtudiant() {
    this.router.navigate(['/etudiant']);
  }

  onSubmit() {
    if (this.etudiantForm.valid) {
      const formData = new FormData();
      this.etudiant.nomEt = this.etudiantForm.controls.nomEt.value;
      this.etudiant.prenomEt = this.etudiantForm.controls.prenomEt.value;
      this.etudiant.cin = this.etudiantForm.controls.cin.value;
      this.etudiant.ecole = this.etudiantForm.controls.ecole.value;
      this.etudiant.dateNaissance = this.etudiantForm.controls.dateNaissance.value;

      const fileInput = this.photo; // Supposons que this.photo soit votre entrée de fichier
      if (fileInput) {
        this.ng2ImgMaxService.resize([fileInput], 800, 600).subscribe((result) => {
          const resizedImage = result && result.length ? result[0] : null;
          if (resizedImage) {
            formData.append('photo', resizedImage);
          } else {
            formData.append('photo', fileInput);
          }
          this.etudiantService.CreateEtudiant(formData).subscribe(
            data => {
              // Gérer le succès
              console.log('Etudiant ajouté avec succès !');
            },
            error => {
              // Gérer l'erreur
              console.error('Erreur lors de l\'ajout de l\'étudiant :', error);
            }
          );
        });
      }
    } else {
      console.log('Formulaire invalide');
    }
  }
 
  
  

  generatePDF() {
    const doc = new jsPDF();
  
    doc.setFont('helvetica');
    doc.setFontSize(12);
  
    // Create an HTML canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    // Create an Image object
    const img = new Image();
    img.src = this.image;
  
    // Wait for the image to load
    img.onload = () => {
      // Set the canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;
  
      // Draw the image onto the canvas
      context.drawImage(img, 0, 0, img.width, img.height);
  
      // Convert the canvas content to a data URL
      const imgData = canvas.toDataURL('image/jpeg');
  
      // Add the image to the PDF
      doc.addImage(imgData, 'JPEG', 20, 20, 50, 50); // X, Y, width, height
  
      // Add the text
      doc.text('Nom: ' + this.etudiantForm.value.nomEt, 20, 80);
      doc.text('Prénom: ' + this.etudiantForm.value.prenomEt, 20, 90);
      doc.text('CIN: ' + this.etudiantForm.value.cin, 20, 100);
      doc.text('Ecole: ' + this.etudiantForm.value.ecole, 20, 110);
      doc.text('Date de naissance: ' + this.etudiantForm.value.dateNaissance, 20, 120);
  
      // Save the PDF
      doc.save('formulaire_etudiant.pdf');
    };
  }
  

  
  
  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      this.photo = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(this.photo);
    }
  }


  getImage(etudiant: Etudiant) {
    if (etudiant && etudiant.image && etudiant.image.data) {

      this.retrievedImage = 'data:' + etudiant.image.type + ';base64,' + etudiant.image.data;
      return this.retrievedImage;
    } else {
      return ''; // or any default image URL or placeholder
    }
  }

base64ToArrayBuffer(base64: string): Uint8Array {
  const binaryString = window.atob(base64);
  const length = binaryString.length;
  const bytes = new Uint8Array(length);
  
  for (let i = 0; i < length; i++) {
    bytes[i] = binaryString.charCodeAt(i) & 0xFF;
  }return bytes;
}
}

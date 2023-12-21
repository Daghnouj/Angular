import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'app/etudiant';
import { EtudiantService } from 'app/etudiant.service';
import { data } from 'jquery';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  etudiant: Etudiant;
  etudiantId: number;
  etudiantCin: string;
  idEtudiant!: number;
  etudiantForm: FormGroup;

  photo: File;
  image: string;
  base64Data: Int8Array;
  retrievedImage: string;
 
  constructor(private etudiantService: EtudiantService,private router: Router, private route: ActivatedRoute) {}

 
  
  ngOnInit(): void {
    this.idEtudiant = this.route.snapshot.params['idEtudiant'];

    this.etudiant = new Etudiant();
    this.etudiantService.getEtudiantById(this.idEtudiant).subscribe( data => {
      this.etudiant = data;
      console.log('Etudiant:', this.etudiant);
    console.log('Image:', this.etudiant.image);
    });}

  getEtudiantById() {
    this.etudiantService.getEtudiantById(this.etudiantId).subscribe(
      (data: Etudiant) => {
        this.etudiant = data;
      },
      error => {
        console.error('Une erreur s\'est produite lors de la récupération des données de l\'étudiant par ID.', error);
      }
    );
  }


  
getImage(etudiant: Etudiant) {
  console.log('Etudiant:' ,etudiant);
  if (etudiant && etudiant.image && etudiant.image.data) {
    this.base64Data = etudiant.image.data;
    //this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    this.retrievedImage = 'data:' + etudiant.image.type + ';base64,' + this.base64Data;
    return this.retrievedImage;
  } else {
    return ''; // or any default image URL or placeholder
  }
}

generatePDF() {
  const doc = new jsPDF();

  doc.setFont('helvetica');
  doc.setFontSize(12);

  // Utilisez la méthode getImage pour obtenir l'URL de l'image
  const imgData = this.getImage(this.etudiant);

  // Ajoutez l'image au PDF
  doc.addImage(imgData, 'JPEG', 20, 20, 50, 50); // X, Y, width, height

  // Ajoutez le texte
  doc.text('Nom: ' + this.etudiant.nomEt, 20, 80);
  doc.text('Prénom: ' + this.etudiant.prenomEt, 20, 90);
  doc.text('CIN: ' + this.etudiant.cin, 20, 100);
  doc.text('Ecole: ' + this.etudiant.ecole, 20, 110);
  doc.text('Date de naissance: ' + this.etudiant.dateNaissance, 20, 120);

  // Enregistrez le PDF
  doc.save('formulaire_etudiant.pdf');
}
}
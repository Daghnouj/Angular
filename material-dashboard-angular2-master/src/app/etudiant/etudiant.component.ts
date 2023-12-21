import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantService } from 'app/etudiant.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rowHover', [
      transition(':enter', [
        style({ backgroundColor: 'transparent' }),
        animate('1000ms', style({ backgroundColor: '#FFE6E6' })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ backgroundColor: 'transparent' })),
      ]),
    ]),
  ],

})
export class EtudiantComponent implements OnInit {
  totalLength:any;
  page:number=1
  etudiants: Etudiant[];
  errorMessage: string = '';
  recherche: string = '';
  base64Data: Int8Array;
retrievedImage: string;
image: string
message: File;
photo: File;
  delayTimer: any;

  constructor(private etudiantService : EtudiantService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEtudiants();
    
  }
private getEtudiants(){
  this.etudiantService.getEtudiant().subscribe(data => {
    this.etudiants=data;
  });
}
/*
deleteEtudiant(idEtudiant: number){
  this.etudiantService.deleteEtudiant(idEtudiant).subscribe( data => {
    console.log(data);
    this.getEtudiants();
  })
}*/
deleteEtudiant(idEtudiant: number) {
  const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément?');

  if (confirmation) {
    this.etudiantService.deleteEtudiant(idEtudiant).subscribe(
      data => {
        console.log(data);
        this.getEtudiants();
      },
      error => {
        console.error(error);
      }
    );
  }
}
updateEtudiant(idEtudiant: number){
  this.router.navigate(['update-etudiant', idEtudiant]);
}



etudiantDetails(idEtudiant: number){
  this.router.navigate(['etudiant-details', idEtudiant]);
}

/*
rechercher() {
  if (this.recherche.trim() !== '') {
      this.etudiantService.getByNomEt(this.recherche).subscribe(
          data => {
              this.etudiants = data;
          },
          error => {
              this.errorMessage = 'Erreur lors de la recherche';
              console.error(error);
          }
      );
  } else {
      // Si le champ est vide, afficher tous les étudiants (ou une liste par défaut)
      this.etudiantService.getEtudiant().subscribe(
          data => {
              this.etudiants = data;
          },
          error => {
              this.errorMessage = 'Erreur lors de la récupération de la liste des étudiants';
              console.error(error);
          }
      );
  }
}*/
/*
rechercher() {
  clearTimeout(this.delayTimer);

  const idEtudiant: number = parseInt(this.recherche, 10);

  if (!isNaN(idEtudiant)) {
    this.delayTimer = setTimeout(() => {
      this.etudiantDetails(idEtudiant);
    }, 1000);
  } else {
    this.errorMessage = 'Veuillez saisir un ID valide.';
  }
}

rechercherParId(idEtudiant: number) {
  this.etudiantDetails(idEtudiant);
}*/
rechercher() {
  clearTimeout(this.delayTimer);

  const idEtudiant: number = parseInt(this.recherche, 10);

  if (!isNaN(idEtudiant)) {
    this.delayTimer = setTimeout(() => {
      this.etudiantService.getEtudiantById(idEtudiant).subscribe(
        (data: Etudiant) => {
          // Display a list containing only the found student
          this.etudiants = [data];
          this.errorMessage=''
        },
        (error) => {
          this.errorMessage = 'Erreur lors de la recherche par ID';
          console.error(error);
        }
      );
    }, 1000);
  }else {
    // If the input is cleared, restore the full list of students
    this.getEtudiants();
  }
}


getImage(etudiant:Etudiant) {

  console.log(this.retrievedImage)
   this.base64Data = etudiant.image.data;
   this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

   return this.retrievedImage;
  
 }
}

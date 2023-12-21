// Importez les modules nécessaires
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChambreService } from 'app/chambre.service';
import { Chambre } from './chambre.module';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css'],
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
export class ChambreComponent implements OnInit {

  chambre: Chambre[];
  errorMessage: string = '';
  recherche: string = '';
  delayTimer: any;
  p: number = 1; // Page actuelle
  pageSize: number = 10; // Nombre d'éléments par page

  constructor(private chambreservice: ChambreService, private router: Router) { }

  ngOnInit(): void {
    this.getAllChambres();
  }

  private getAllChambres() {
    this.chambreservice.getAllChambres().subscribe(data => {
      this.chambre = data;
    });
  }

  removeChambre(idChambre: number): void {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément?');

    if (confirmation) {
      this.chambreservice.removeChambre(idChambre).subscribe(
        data => {
          console.log(data);
          this.getAllChambres();
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  modifyChambre(idChambre: number) {
    this.router.navigate(['update-chambre', idChambre]);
  }

  chambreDetails(idChambre: number) {
    this.router.navigate(['chambre-details', idChambre]);
  }

  rechercher() {
    clearTimeout(this.delayTimer);
  
    const idChambre: number = parseInt(this.recherche, 10);
  
    if (!isNaN(idChambre)) {
      this.delayTimer = setTimeout(() => {
        this.chambreDetails(idChambre);
      }, 700);
    } else {
      this.errorMessage = 'Veuillez saisir un ID valide.';
    }
  }
  
}

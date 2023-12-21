import { Component, OnInit } from '@angular/core';
import { UniversiteModule } from './universite.module';
import { Router } from '@angular/router';
import { SharedService } from 'app/shared.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css'],
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

export class UniversiteComponent implements OnInit {
  universite: UniversiteModule[] = [];
  errorMessage = '';
  recherche = '';
  delayTimer: any;
  p = 1; // Page actuelle
  pageSize = 10; // Nombre d'éléments par page

  constructor(private sharedservice: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUniversites();
  }

  private getAllUniversites() {
    this.sharedservice.getAllUniversites().subscribe(
      (data: UniversiteModule[]) => {
        this.universite = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la récupération de la liste des universités';
        console.error(error);
      }
    );
  }

  removeUniversite(idUniversite: number): void {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément?');

    if (confirmation) {
      this.sharedservice.removeUniversite(idUniversite).subscribe(
        () => {
          this.getAllUniversites();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  modifyUniversite(idUniversite: number) {
    this.router.navigate(['update-universite', idUniversite]);
  }

  universiteDetails(idUniversite: number) {
    this.router.navigate(['universite-details', idUniversite]);
  }

  rechercher() {
    clearTimeout(this.delayTimer);

    const idUniversite: number = parseInt(this.recherche, 10);

    if (!isNaN(idUniversite)) {
      this.delayTimer = setTimeout(() => {
        this.universiteDetails(idUniversite);
      }, 700);
    } else {
      this.errorMessage = 'Veuillez saisir un ID valide.';
    }
  }
}

// Importez les modules nécessaires
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlocService } from 'app/service-bloc.service';
import { Bloc } from './bloc.module';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-Bloc',
  templateUrl: './Bloc.component.html',
  styleUrls: ['./Bloc.component.css'],
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
export class BlocComponent implements OnInit {
  bloc: Bloc[];
  errorMessage: string = '';
  recherche: string = '';
  delayTimer: any;
  p: number = 1; // Page actuelle
  pageSize: number = 10; // Nombre d'éléments par page

  constructor(private blocservice: BlocService, private router: Router) {}

  ngOnInit(): void {
    this.getAllBlocs();
  }

  private getAllBlocs() {
    this.blocservice.getAllBlocs().subscribe(
      (data: Bloc[]) => {
        this.bloc = data;
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la récupération de la liste des blocs';
        console.error(error);
      }
    );
  }

  removeBloc(idBloc: number): void {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément?');

    if (confirmation) {
      this.blocservice.removeBloc(idBloc).subscribe(
        data => {
          console.log(data);
          this.getAllBlocs();
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  modifyBloc(idBloc: number) {
    this.router.navigate(['update-bloc', idBloc]);
  }

  blocDetails(idBloc: number) {
    this.router.navigate(['bloc-details', idBloc]);
  }

  rechercher() {
    clearTimeout(this.delayTimer);

    const idBloc: number = parseInt(this.recherche, 10);

    if (!isNaN(idBloc)) {
      this.delayTimer = setTimeout(() => {
        this.blocDetails(idBloc);
      }, 700);
    } else {
      this.errorMessage = 'Veuillez saisir un ID valide.';
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChambreComponent } from './chambre.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: ChambreComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class Chambre { 
  idChambre: number;
  numeroChambre: number;
  typeC: string; // Remplacez string par le type approprié pour TypeChambre
  bloc: any; // Remplacez any par le type approprié pour Bloc
  reservations: any[]; // Remplacez any par le type approprié pour Reservation
controls: any;
}
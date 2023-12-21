import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocComponent } from './Bloc.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: BlocComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class Bloc {
  idBloc?: number;
  nomBloc: string;
  capaciteBloc: number;
  foyer?: any; // Remplacez any par le type approprié pour Foyer
  chambres?: any[]; // Remplacez any par le type approprié pour Chambre
  id: number;
}

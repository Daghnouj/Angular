import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateEtudiantComponent } from './create-etudiant.component';

const routes: Routes = [
  { path: '', component: CreateEtudiantComponent },
];

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CreateEtudiantModule { }

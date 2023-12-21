import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteDetailsComponent } from './universite-details.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: UniversiteDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class UniversiteDetailsModule { }

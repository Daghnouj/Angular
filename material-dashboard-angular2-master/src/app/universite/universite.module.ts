import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteComponent } from './universite.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: UniversiteComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UniversiteModule {

    idUniversite?: number; 
    nomUniversite?: string;
    adresse?: string;
  }

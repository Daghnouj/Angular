import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutUniversiteComponent } from './ajout-universite.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: AjoutUniversiteComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class AjoutUniversiteModule { 
  
}

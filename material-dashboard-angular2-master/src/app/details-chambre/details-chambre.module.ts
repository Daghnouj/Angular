import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsChambreComponent } from './details-chambre.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: DetailsChambreComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class DetailsChambreModule { }

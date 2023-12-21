import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateChambreComponent } from './create-chambre.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: CreateChambreComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class CreateChambreModule { }

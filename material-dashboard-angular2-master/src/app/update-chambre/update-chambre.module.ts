import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBlocComponent } from 'app/update-bloc/update-bloc.component';
import { UpdateChambreComponent } from './update-chambre.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: UpdateChambreComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class UpdateChambreModule { }

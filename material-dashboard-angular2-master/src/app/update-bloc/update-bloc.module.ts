import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBlocComponent } from './update-bloc.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: UpdateBlocComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UpdateBlocModule { }

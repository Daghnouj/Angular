import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBlocComponent } from './create-bloc.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: CreateBlocComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CreateBlocModule { }

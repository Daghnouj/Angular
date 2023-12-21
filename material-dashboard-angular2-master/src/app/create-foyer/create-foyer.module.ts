import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CreateFoyerComponent } from './create-foyer.component';

const routes = [
  {
    path: '',
    component: CreateFoyerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

      RouterModule.forChild(routes)
    ]
  
})
export class CreateFoyerModule { }
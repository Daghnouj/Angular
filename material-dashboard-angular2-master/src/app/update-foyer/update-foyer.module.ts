import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateFoyerComponent } from 'app/update-foyer/update-foyer.component';
import { RouterModule,Routes } from '@angular/router';

const routes = [
  {
    path: '',
    component: UpdateFoyerComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class UpdateFoyerModule { }
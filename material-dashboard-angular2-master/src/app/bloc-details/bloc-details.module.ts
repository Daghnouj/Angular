import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { BlocDetailsComponent } from './bloc-details.component';


const routes: Routes = [
  { path: '', component: BlocDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class BlocDetailsModule { }

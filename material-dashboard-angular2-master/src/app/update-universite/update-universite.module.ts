import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUniversiteComponent } from './update-universite.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: UpdateUniversiteComponent},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})

export class UpdateUniversiteModule { }

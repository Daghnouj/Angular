
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantDetailsComponent } from './etudiant-details.component';


const routes: Routes = [
  { path: '', component: EtudiantDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtudiantDetailsModule { }

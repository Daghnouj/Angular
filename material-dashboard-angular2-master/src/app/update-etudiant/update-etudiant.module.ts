import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEtudiantComponent } from './update-etudiant.component';


const routes: Routes = [
  { path: '', component: UpdateEtudiantComponent },
];

@NgModule({
  //declarations: [UpdateEtudiantComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateEtudiantModule { }

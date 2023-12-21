import { NgModule, createComponent } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BlocComponent } from './Bloc/Bloc.component';
import { CreateBlocComponent } from './create-bloc/create-bloc.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';


import { BlocDetailsComponent } from './bloc-details/bloc-details.component';
import { ChambreComponent } from './chambre/chambre.component';
import { CreateChambreComponent } from './create-chambre/create-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
import { LoginComponentComponent } from './login-component/login-component.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { FoyerComponent } from './foyer/foyer.component';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { IconsComponent } from './icons/icons.component';
import { authGuard } from './auth-guard.service';

const routes: Routes =[
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'bloc', loadChildren: () => import('./Bloc/bloc.module').then(m => m.Bloc) },
  { path: 'bloc-details/:idBloc', loadChildren: () => import('./bloc-details/bloc-details.module').then(m => m.BlocDetailsModule) },
  { path: 'create-bloc', loadChildren: () => import('./create-bloc/create-bloc.module').then(m => m.CreateBlocModule) },
  { path: 'update-bloc/:idBloc', loadChildren: () => import('./update-bloc/update-bloc.module').then(m => m.UpdateBlocModule) },
  { path: 'chambre', loadChildren: () => import('./chambre/chambre.module').then(m => m.Chambre) },
  { path: 'chambre-details/:idChambre', loadChildren: () => import('./details-chambre/details-chambre.module').then(m => m.DetailsChambreModule) },
  { path: 'create-chambre', loadChildren: () => import('./create-chambre/create-chambre.module').then(m => m.CreateChambreModule) },
  { path: 'update-chambre/:idChambre', loadChildren: () => import('./update-chambre/update-chambre.module').then(m => m.UpdateChambreModule) },
  { path: 'ajout-universite', loadChildren: () => import('./ajout-universite/ajout-universite.module').then(m => m.AjoutUniversiteModule) },
  { path: 'universite-details/:idUniversite', loadChildren: () => import('./universite-details/universite-details.module').then(m => m.UniversiteDetailsModule) },
  { path: 'update-universite/:idUniversite', loadChildren: () => import('./update-universite/update-universite.module').then(m => m.UpdateUniversiteModule) },
  { path: 'universite', loadChildren: () => import('./universite/universite.module').then(m => m.UniversiteModule) },
  { path: 'etudiant', loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule) },
  { path: 'create-etudiant', loadChildren: () => import('./create-etudiant/create-etudiant.module').then(m => m.CreateEtudiantModule) },
  { path: 'etudiant-details/:idEtudiant', loadChildren: () => import('./etudiant-details/etudiant-details.module').then(m => m.EtudiantDetailsModule) },
  { path: 'update-etudiant/:idEtudiant', loadChildren: () => import('./update-etudiant/update-etudiant.module').then(m => m.UpdateEtudiantModule) },
  {path:'create-foyer', /*component:CreateFoyerComponent*/  loadChildren: () => import('./create-foyer/create-foyer.module').then(m => m.CreateFoyerModule)},
  {path:'foyer',component:FoyerComponent},
  {path:'update-foyer/:id', /*component: UpdateFoyerComponent*/  loadChildren: () => import('./update-foyer/update-foyer.module').then(m => m.UpdateFoyerModule)},
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }],
  },
  { path: 'icons', component: IconsComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'Sign',        component:SignComponent },
 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'features', component: FeatureListComponent },
 /* {path:'update-bloc/:idBloc',component:UpdateBlocComponent
},
{path:'update-chambre/:idChambre',component:UpdateChambreComponent
},

{
  path:'chambre-details/:idChambre',component:DetailsChambreComponent
},
{
  path:'remove-bloc/:idBloc',component:BlocDetailsComponent
},
{
  path:'remove-chambre/:idChambre',component:DetailsChambreComponent
},
{
  path:'bloc',component:BlocDetailsComponent
},
{
  path:'chambre',component:DetailsChambreComponent
}
 
  {path:'create-bloc',component:CreateBlocComponent},
  {path:'chambre',component:ChambreComponent},
  {path:'create-chambre',component:CreateChambreComponent},
*/
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

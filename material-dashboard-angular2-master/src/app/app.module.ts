import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreateBlocComponent } from './create-bloc/create-bloc.component';
import { BlocDetailsComponent } from './bloc-details/bloc-details.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { ChambreComponent } from './chambre/chambre.component';
import { DetailsChambreComponent } from './details-chambre/details-chambre.component';
import { CreateChambreComponent } from './create-chambre/create-chambre.component';
import { UpdateChambreComponent } from './update-chambre/update-chambre.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BlocComponent } from './Bloc/Bloc.component';
import { HighlightDirective } from './highlight.directive';
import { NgxPaginationModule } from 'ngx-pagination';

import { SignComponent } from './sign/sign.component';
import { UserService } from './user.service';
import { UniversiteComponent } from './universite/universite.component';
import { AjoutUniversiteComponent } from './ajout-universite/ajout-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import { UniversiteDetailsComponent } from './universite-details/universite-details.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { EtudiantDetailsComponent } from './etudiant-details/etudiant-details.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';

import { FoyerComponent } from './foyer/foyer.component';
import { CreateFoyerComponent } from './create-foyer/create-foyer.component';
import { UpdateFoyerComponent } from './update-foyer/update-foyer.component';
import { FoyerDirectiveDirective } from './foyer-directive.directive';
import { IconsComponent } from './icons/icons.component';
import { FeatureListComponent } from './feature-list/feature-list.component';

import { MessageService } from 'primeng/api';
//import { UpComponent } from './signin/up/up.component';
//import { RegisterComponent } from './register/register.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgxPaginationModule,
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CreateBlocComponent,
    BlocDetailsComponent,
    UpdateBlocComponent,
    ChambreComponent,
    DetailsChambreComponent,
    CreateChambreComponent,
    UpdateChambreComponent,
    LoginComponentComponent,
    BlocComponent,
    //UpComponent,
    //RegisterComponent,
    HighlightDirective,
   
    SignComponent,
        UniversiteComponent,
        AjoutUniversiteComponent,
        UpdateUniversiteComponent,
        UniversiteDetailsComponent,
        EtudiantComponent,
        CreateEtudiantComponent,
        EtudiantDetailsComponent,
        UpdateEtudiantComponent,
    
        FoyerComponent,
        CreateFoyerComponent,
        UpdateFoyerComponent,
        FoyerDirectiveDirective,
        IconsComponent,
        FeatureListComponent,
        
    
   

  ],
  providers: [MessageService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

import { BlocComponent } from '../../Bloc/Bloc.component';

import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { IconsComponent } from '../../icons/icons.component';
import { ChambreComponent } from '../../chambre/chambre.component';


import { SignComponent } from 'app/sign/sign.component';
import { UniversiteComponent } from 'app/universite/universite.component';
import { EtudiantComponent } from 'app/etudiant/etudiant.component';
import { FoyerComponent } from 'app/foyer/foyer.component';



export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    // { path: '',
     // children: [ {
     //   path: 'icons',
     //   component: IconsComponent
     //   }]
   // }, 
     
   // {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'Bloc',            component: BlocComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'chambres',        component: ChambreComponent },
   //{ path: 'Sign',        component:SignComponent },
   { path: 'Universite',        component:UniversiteComponent},
   { path: 'etudiant',        component:EtudiantComponent},
   { path: 'foyer',        component:FoyerComponent}

   
];

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/login', title: 'Logout',  icon: 'login', class: '' },
  { path: '/icons', title: 'Info',  icon:'info', class: '' },
  //{ path: '/etudiant', title: 'Etudiant',  icon:'person', class: '' },
  //{ path: '/Universite', title: 'Universite',  icon:'unarchive', class: 'active-pro' },
  { path: '/user-profile', title: 'Etudiant Profile',  icon:'person', class: '' },
  //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
 // { path: '/foyer', title: 'Foyer', icon: 'home', class: '' },
  //{ path: '/Bloc', title: 'Bloc', icon: 'apartment', class: '' },
  
  //{ path: '/chambres', title: 'Chambre',  icon:'bed', class: '' },

  //{ path: '/Universite', title: 'Universite',  icon:'school', class: '' },
 // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
 // { path: '/sign', title: 'Sign Up',  icon:'unarchive', class: 'active-pro' },

 
 
 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };


}

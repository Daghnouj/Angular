import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
   
  }

  navigateTo(route: string): void {
    // Assuming you have defined routes for the components
    // Navigate to the corresponding component based on the button clicked
    // Make sure to configure the routes in your Angular application
    // For example, if route is 'bloc', it will navigate to '/bloc'
    // Adjust the routes according to your actual routing setup

    this.router.navigate([`/${route}`]);
  }

}

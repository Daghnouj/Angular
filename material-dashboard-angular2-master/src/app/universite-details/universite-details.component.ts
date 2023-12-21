// UniversiteDetailsComponent.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'app/shared.service';
import { UniversiteModule } from 'app/universite/universite.module';

@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.css']
})
export class UniversiteDetailsComponent implements OnInit {

  idUniversite!: number;
  universite!: UniversiteModule;

  constructor(private router: Router, private route: ActivatedRoute, private sharedservice: SharedService) { }

  ngOnInit(): void {
    this.idUniversite = +this.route.snapshot.params['idUniversite']; // Corrected parameter name
    this.universite = new UniversiteModule();
    this.sharedservice.getUniversiteById(this.idUniversite).subscribe(data => {
      this.universite = data;
    });
  }

  goToUniversite() {
    this.router.navigate(['/universite']); // Corrected navigation path
  }

  imagePath = 'assets/img/viewDetails.png';
}

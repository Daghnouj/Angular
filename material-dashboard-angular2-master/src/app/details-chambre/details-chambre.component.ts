
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from 'app/chambre.service';
import { Chambre } from 'app/chambre/chambre.module';

@Component({
  selector: 'app-details-chambre',
  templateUrl: './details-chambre.component.html',
  styleUrls: ['./details-chambre.component.css'],

  animations: [
    trigger('moveInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class DetailsChambreComponent implements OnInit {
  idChambre!: number;
  chambre!: Chambre;

  constructor(private router:Router,private route: ActivatedRoute, private chambreservice: ChambreService) { }
  ngOnInit(): void {
    this.idChambre = this.route.snapshot.params['idChambre'];
    this.chambre = new Chambre();
    this.chambreservice.getChambreById(this.idChambre).subscribe(data => {
      this.chambre = data;
    });
  }
  goToChambre(){
    this.router.navigate(['/chambres']);
  }

  imagePath = 'assets/img/viewDetails.png';
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations'; 
import { Bloc } from 'app/Bloc/bloc.module';
import { BlocService } from 'app/service-bloc.service';

@Component({
  selector: 'app-bloc-details',
  templateUrl: './bloc-details.component.html',
  styleUrls: ['./bloc-details.component.css'],
  animations: [ // Ajout de l'animation dans le décorateur du composant
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('1200ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('1200ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class BlocDetailsComponent implements OnInit {
  idBloc!: number;
  bloc!: Bloc;

  constructor(private router:Router ,private route: ActivatedRoute, private blocservice: BlocService) { }

  ngOnInit(): void {
    this.idBloc = this.route.snapshot.params['idBloc'];
    this.bloc = new Bloc();
    this.blocservice.getBlocById(this.idBloc).subscribe(data => {
      this.bloc = data;
    });
  }
  goToBloc(){
    this.router.navigate(['/bloc']);
  }

  imagePath = 'assets/img/viewDetails.png';
}

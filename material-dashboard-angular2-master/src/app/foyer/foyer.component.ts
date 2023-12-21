import { Component } from '@angular/core';
import { Foyer } from 'app/foyer';
import { FoyerService } from 'app/foyer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ opacity: 0 })),
      ]),
    ]),
    trigger('rowHover', [
      transition(':enter', [
        style({ backgroundColor: 'transparent' }),
        animate('1000ms', style({ backgroundColor: '#FFE6E6' })),
      ]),
      transition(':leave', [
        animate('1000ms', style({ backgroundColor: 'transparent' })),
      ]),
    ]),
  ],
})

export class FoyerComponent {

  list: Foyer[];
  constructor( private foyerService:FoyerService,private router: Router, private activatedRoute: ActivatedRoute){}
  ngOnInit():void{
    this.getAllFoyer();
   
  }
  private getAllFoyer(){
    this.foyerService.getFoyerList().subscribe(data=>{
      this.list= data;
    }
      
    )
  }

  //fonction delete
  deleteFoyer(id: number){
    this.foyerService.deleteFoyer(id).subscribe( data => {
      console.log(data);
      this.getAllFoyer();
    })
  }
  //fonction update
  updateFoyer(id: number) {
    console.log('Bouton cliqué, redirection vers update-foyer/' + id);
    this.router.navigate(['/update-foyer', id]);
  }

}
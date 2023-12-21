import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoyerService } from 'app/foyer.service';
import { Router } from '@angular/router';
import { Foyer } from 'app/foyer';

import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-update-foyer',
  templateUrl: './update-foyer.component.html',
  styleUrls: ['./update-foyer.component.css'],
  animations: [ // Ajout de l'animation dans le décorateur du composant
  trigger('fadeInOut', [
    transition(':enter', [style({ opacity: 0 }), animate('1200ms', style({ opacity: 1 }))]),
    transition(':leave', [animate('1200ms', style({ opacity: 0 }))]),
  ])
]
 
})
export class UpdateFoyerComponent implements OnInit {
  idFoyer!: number;
  foyerForm : FormGroup;
  foyer : Foyer;
  
  
  constructor( private foyerService:FoyerService,
    private router:Router,
    private route:ActivatedRoute,
    private formBuilder: FormBuilder
    ){
      this.foyerForm=this.formBuilder.group({
        nomFoyer:['',[Validators.required, Validators.minLength(2)]],
        capaciteFoyer:['', Validators.required],

      });
    }
  ngOnInit(): void {
    this.idFoyer = this.route.snapshot.params['id'];
    //this.route.params.subscribe(params => {
      //this.idFoyer = +params['idFoyer']; // Utilisation de l'opérateur + pour convertir le paramètre en nombre
      this.foyerService.getbyidFoyer(this.idFoyer).subscribe(data => {
        this.foyerForm.patchValue( {       
          nomFoyer: data.nomFoyer,
          capaciteFoyer: data.capaciteFoyer,
        });
      }, error => console.log(error));
    }
    
  

  OnSubmit() {
    console.log('Submit button clicked!');
    if (this.foyerForm.valid) {
      const updatedFoyer = { ...this.foyerForm.value, idFoyer: this.idFoyer };
      this.foyerService.modifyFoyer(this.idFoyer,updatedFoyer ).subscribe(data => {
        this.goToFoyerList();
      }, error => console.log(error));
    }
  }

  goToFoyerList() {
    this.router.navigate(['/foyer']);
  }
    
 
  }
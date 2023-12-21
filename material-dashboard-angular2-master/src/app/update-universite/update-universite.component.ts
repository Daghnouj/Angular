import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'app/shared.service';
import { UniversiteModule } from 'app/universite/universite.module';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
      ]),
    ]),
  ],
})
export class UpdateUniversiteComponent implements OnInit {
  idUniversite: number;
  universiteForm: FormGroup;

  constructor(
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idUniversite = +params['idUniversite'];

      this.universiteForm = this.formBuilder.group({
        nomUniversite: ['', Validators.required],
        adresse: ['', Validators.required],
      });

      this.sharedService.getUniversiteById(this.idUniversite).subscribe(
        (data) => {
          this.universiteForm.patchValue({
            nomUniversite: data?.nomUniversite || '',
            adresse: data?.adresse|| '',
          });
        },
        (error) => console.log(error)
      );
    });
  }

  onSubmit() {
    this.sharedService.modifyUniversite(this.idUniversite, this.universiteForm.value).subscribe(
      (data) => {
        this.goToUniversite();
      },
      (error) => console.log(error)
    );
  }

  goToUniversite() {
    this.router.navigate(['/universite']);
  }

generatePDF() {
  const doc = new jsPDF();

  doc.setFont('helvetica');
  doc.setFontSize(12);

  // Create an HTML canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

 

  

    // Add the text
    doc.text('Nom: ' + this.universiteForm.value.nomUniversite, 20, 80);
    doc.text('Adresse: ' + this.universiteForm.value.Adresse, 20, 90);
  

    // Save the PDF
    doc.save('formulaire_universite.pdf');
  }}

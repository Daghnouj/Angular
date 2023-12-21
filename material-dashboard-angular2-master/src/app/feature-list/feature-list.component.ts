// feature-list.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css'],
})
export class FeatureListComponent implements OnInit {
  backgroundImage = 'assets/img/background.jpg';

  constructor() {}

  ngOnInit(): void {}
}

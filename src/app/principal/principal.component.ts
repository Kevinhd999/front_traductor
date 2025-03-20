  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { TutorialComponent } from './tutorial/tutorial.component';


  @Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css'],
    standalone: true,
    imports: [CommonModule, TutorialComponent]
  })
  export class PrincipalComponent implements OnInit {
    constructor() {
     }

    ngOnInit() { }
  }

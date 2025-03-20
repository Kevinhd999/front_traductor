  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
  })
  export class PrincipalComponent implements OnInit {
    selectedTab: string = 'traductor'; // Tab predeterminado

    constructor() {
      console.log("PrincipalComponent cargado");
     }

    ngOnInit() { }

    selectTab(tab: string) {
      this.selectedTab = tab;
    }
  }

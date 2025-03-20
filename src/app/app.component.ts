import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import {TutorialComponent} from './principal/tutorial/tutorial.component'

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,PrincipalComponent]
})
export class AppComponent {
  title = 'front-traductor';
}

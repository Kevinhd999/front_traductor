import { Component } from '@angular/core';
import { PrincipalComponent } from './principal/principal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [PrincipalComponent]
})
export class AppComponent {
  title = 'front-traductor';
}

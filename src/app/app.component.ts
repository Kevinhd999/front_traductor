import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule

@Component({
  selector: 'app-root',
  standalone: true, // Asegura que es un componente independiente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // IMPORTA RouterModule aquí
})
export class AppComponent {
  title = 'front-traductor';
}


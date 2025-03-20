import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ManualComponent } from './manual/manual.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  standalone: true,
  imports: [CommonModule, TutorialComponent, ManualComponent, MenuComponent]
})
export class PrincipalComponent {
  selectedTab: string = 'menu';
}

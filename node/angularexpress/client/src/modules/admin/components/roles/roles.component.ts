import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-roles',
  //imports: [RouterOutlet],
  standalone: false,
  templateUrl: './roles.html',
  styleUrl: './roles.css'
})
export class RolesComponent {
  protected readonly title = signal('client');
  
}

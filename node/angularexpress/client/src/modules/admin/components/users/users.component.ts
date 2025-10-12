import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-users',
  //imports: [RouterOutlet],
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersComponent {
  protected readonly title = signal('client');
  
}

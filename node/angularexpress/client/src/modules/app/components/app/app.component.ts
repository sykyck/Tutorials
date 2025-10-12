import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('client');
}

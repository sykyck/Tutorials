import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('client');
}

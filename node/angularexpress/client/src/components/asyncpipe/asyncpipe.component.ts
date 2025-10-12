import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asyncpipe',
  //imports: [CommonModule, HttpClientModule],
  standalone: false,
  templateUrl: './asyncpipe.html',
  styleUrl: './asyncpipe.css'
})
export class AsyncpipeComponent {
  users$!: Observable<any[]>; // note the $ suffix = Observable convention

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Example API: JSONPlaceholder (fake REST API)
    this.users$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}

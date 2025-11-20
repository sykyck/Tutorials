import { Component } from '@angular/core';
import { SharedStateService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private shared: SharedStateService) {}

  ngOnInit() {
    this.shared.setState('username', 'vaibhav');
  }
  title = 'shell';
}

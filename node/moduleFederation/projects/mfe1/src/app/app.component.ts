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
    console.log(this.shared.getState('username'));
  }

  title = 'mfe1';
}

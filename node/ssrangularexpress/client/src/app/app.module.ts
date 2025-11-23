import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

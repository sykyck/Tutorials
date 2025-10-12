import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AsyncpipeComponent } from './components/asyncpipe/asyncpipe.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AppComponent, AsyncpipeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

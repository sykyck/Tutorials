import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AsyncpipeComponent } from './components/asyncpipe/asyncpipe.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../../services/jwt-interceptor.service';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, AsyncpipeComponent, SignupComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    FormsModule, // <-- add this
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
})
export class AppModule {}

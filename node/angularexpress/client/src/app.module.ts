import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AsyncpipeComponent } from './components/asyncpipe/asyncpipe.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './components/app/app.component';

const routes: Routes = [
  { path: 'asyncpipe', component: AsyncpipeComponent }
];

@NgModule({
  declarations: [AppComponent, AsyncpipeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

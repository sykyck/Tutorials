import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ElementHighlightDirective } from './directives/highlight/elementhighlight.directive';

@NgModule({
  declarations: [ElementHighlightDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [],
})
export class SharedModule {}

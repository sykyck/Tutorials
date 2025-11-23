import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementHighlightDirective } from './directives/highlight/elementhighlight.directive';

import { MainLayoutComponent } from './components/layouts/main/main-layout.component';
import { PublicLayoutComponent } from './components/layouts/public/public-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './components/layouts/admin/admin-layout.component';

@NgModule({
  declarations: [
    ElementHighlightDirective,
    MainLayoutComponent,
    PublicLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule // needed for router-outlet, routerLink
  ],
  exports: [
    ElementHighlightDirective,
    MainLayoutComponent,
    PublicLayoutComponent,
    AdminLayoutComponent
  ]
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [UsersComponent, RolesComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
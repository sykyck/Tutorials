import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';

const adminRoutes: Routes = [
    {
      path:'',
      children: [
        { path: 'users', component: UsersComponent },
        { path: 'roles', component: RolesComponent }
      ]
    }];;

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

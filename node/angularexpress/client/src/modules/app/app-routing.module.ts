import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncpipeComponent } from './components/asyncpipe/asyncpipe.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'asyncpipe', component: AsyncpipeComponent, canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) } //admin routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

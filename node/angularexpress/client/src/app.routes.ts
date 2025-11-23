import { Routes } from '@angular/router';
import { AsyncpipeComponent } from './modules/app/components/asyncpipe/asyncpipe.component';
import { SignupComponent } from './modules/app/components/signup/signup.component';
import { LoginComponent } from './modules/app/components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './modules/shared/components/layouts/main/main-layout.component';
import { PublicLayoutComponent } from './modules/shared/components/layouts/public/public-layout.component';
import { ObservablesComponent } from './modules/app/components/observables/observables.component';


export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  },
  {
    path: 'app',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'asyncpipe', component: AsyncpipeComponent },
      { path: 'observables', component: ObservablesComponent }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) 
  },
];
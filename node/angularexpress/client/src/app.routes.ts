import { Routes } from '@angular/router';
import { AsyncpipeComponent } from './modules/app/components/asyncpipe/asyncpipe.component';
import { SignupComponent } from './modules/app/components/signup/signup.component';
import { LoginComponent } from './modules/app/components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
   { path: 'signup', component: SignupComponent },
   { path: 'login', component: LoginComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'asyncpipe', component: AsyncpipeComponent, canActivate: [AuthGuard] }, // for standalone application
];

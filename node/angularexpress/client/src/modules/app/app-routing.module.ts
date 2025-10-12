import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncpipeComponent } from './components/asyncpipe/asyncpipe.component';

const routes: Routes = [
  { path: 'asyncpipe', component: AsyncpipeComponent },
  { path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) } //admin routes
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

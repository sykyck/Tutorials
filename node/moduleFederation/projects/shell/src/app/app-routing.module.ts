import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mfe1',
    loadChildren: () =>
      import('mfe1/Module').then(m => m.AppModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'mfe1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

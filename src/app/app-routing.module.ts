import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
  }
  ,
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

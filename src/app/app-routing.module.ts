import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule),
    data: { title: 'Registration' }
  },
  {
    path: '',
    component: SearchResultsComponent,
    data: { title: 'Youtube client' }
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { title: 'Login' }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: { title: 'Registration' }
  },
  {
    path: '',
    component: SearchResultsComponent,
    canActivate: [AuthGuard],
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

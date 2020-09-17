import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { FormAddItemComponent } from './admin/form-add-item/form-add-item.component';
import { AuthLoadGuard } from './shared/guards/auth-load.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: FormAddItemComponent,
    canLoad: [AuthLoadGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: {title: 'Admin'}
  },
  {
    path: 'search',
    component: SearchResultsComponent,
    canLoad: [AuthLoadGuard],
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
    data: {title: 'Youtube client'}
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: {title: 'Login'}
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    data: {title: 'Registration'}
  },
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
    data: {title: 'Page Not Found'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

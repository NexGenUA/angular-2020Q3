import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterComponent } from './components/filter/filter.component';
import { YoutubeModule } from '../youtube/youtube.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeInterceptor } from '../shared/interceptors/youtube.interceptor';
import { StoreModule } from '@ngrx/store';
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, FilterComponent],
  imports: [
    SharedModule,
    YoutubeModule,
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer)],
  exports: [
    HeaderComponent,
    FilterComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: YoutubeInterceptor,
    multi: true,
  }]
})
export class CoreModule { }

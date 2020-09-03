import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterComponent } from './components/filter/filter.component';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, FilterComponent],
  imports: [SharedModule, YoutubeModule],
  exports: [
    HeaderComponent,
    FilterComponent,
  ]
})
export class CoreModule { }

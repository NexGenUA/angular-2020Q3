import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { YoutubeModule } from '../youtube/youtube.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    YoutubeModule,
  ],
  exports: [
    HeaderComponent,
    YoutubeModule,
  ]
})
export class CoreModule { }

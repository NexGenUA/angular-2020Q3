import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { YoutubeModule } from '../youtube/youtube.module';

@NgModule({
  declarations: [HeaderComponent],
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

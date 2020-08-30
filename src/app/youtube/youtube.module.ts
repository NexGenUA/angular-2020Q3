import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { BorderColorDirective } from '../shared/directives/border-color.directive';
import { ReduceNumberPipe } from '../shared/pipes/reduce-number.pipe';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    FilterComponent,
    SearchResultItemComponent,
    ReduceNumberPipe,
    SortPipe,
    BorderColorDirective,
    InfoBarComponent,
    DetailedInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    SearchResultsComponent,
    FilterComponent,
    SearchResultItemComponent,
  ]
})
export class YoutubeModule {
}

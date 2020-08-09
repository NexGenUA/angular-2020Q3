import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FilterComponent } from './components/filter/filter.component';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { MatCardModule } from '@angular/material/card';
import { ReduceNumberPipe } from './shared/pipes/reduce-number.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';
import { BorderColorDirective } from './shared/directives/border-color.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    FilterComponent,
    SearchResultItemComponent,
    ReduceNumberPipe,
    SortPipe,
    BorderColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

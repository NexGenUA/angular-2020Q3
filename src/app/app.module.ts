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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    FilterComponent,
    SearchResultItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

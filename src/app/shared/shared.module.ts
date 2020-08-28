import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatSortModule,
    MatCardModule,
  ]
})
export class SharedModule { }

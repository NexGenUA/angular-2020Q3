import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  exports: [
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ]
})
export class SharedModule { }

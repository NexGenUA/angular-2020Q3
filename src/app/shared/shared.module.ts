import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReduceNumberPipe } from './pipes/reduce-number.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { BorderColorDirective } from './directives/border-color.directive';

@NgModule({
  declarations: [
    ReduceNumberPipe,
    SortPipe,
    BorderColorDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule,
    RouterModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReduceNumberPipe,
    SortPipe,
    BorderColorDirective,
  ]
})
export class SharedModule {
}

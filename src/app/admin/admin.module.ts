import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormAddItemComponent } from './form-add-item/form-add-item.component';

@NgModule({
  declarations: [FormAddItemComponent],
  imports: [SharedModule, RouterModule.forChild([])]
})
export class AdminModule { }

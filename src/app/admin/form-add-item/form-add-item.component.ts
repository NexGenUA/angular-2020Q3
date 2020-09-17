import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CreateAction } from '../../store/actions/create-item.action';
import { SearchItemAdapter } from '../../shared/classes/search-item-adapter';
import { SearchItem } from '../../shared/models/search-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.scss']
})
export class FormAddItemComponent {
  public form: FormGroup;

  constructor(
    private store$: Store,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
      linkVideo: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),
    });
  }

  public createCard(): void {
    const createItem: SearchItem = new SearchItemAdapter(this.form.value);
    this.store$.dispatch(new CreateAction(createItem));
    this.snackBar.open('Item Created', 'Success', {
      duration: 3000,
    });
    this.router.navigate(['/search']);
  }
}

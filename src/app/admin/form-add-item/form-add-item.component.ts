import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-item',
  templateUrl: './form-add-item.component.html',
  styleUrls: ['./form-add-item.component.scss']
})
export class FormAddItemComponent {
  public form: FormGroup;

  constructor() {
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
    console.log(this.form.value);
  }
}

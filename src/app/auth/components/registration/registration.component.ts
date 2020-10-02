import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public symbols: string = '+-_@$!%*?&#.,;:[]{}';
  public register$: Subscription;
  public emailTooltipText: string = 'E-mail must be format mymail@mydomain.com';
  public passwordTooltipText: string = `Password must be minimum 8 characters and  contain one uppercase, one lowercase letter, one number digit and one special character ${this.symbols}`;
  public isShowTooltipEmail: boolean = false;
  public isShowTooltipPassword: boolean = false;
  public isLoading: boolean = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    private snackBar: MatSnackBar,
  ) {
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.pattern(environment.email),
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.pattern(environment.password),
        Validators.required,
      ]),
    });
  }

  public ngOnDestroy(): void {
    if (this.register$) {
      this.register$.unsubscribe();
    }
  }

  public register(): void {
    this.isLoading = true;
    this.form.disable();

    this.register$ = this.auth.register(this.form.value).subscribe(
      (user) => {
        this.isLoading = false;
        this.router.navigate(['/login'], {
          queryParams: {
            registered: true,
          },
        });
      },
      error => {
        this.isLoading = false;
        this.form.enable();

        this.snackBar.open(`${error?.error || 'Something went wrong'}`, 'Error', {
          duration: 5000,
        });
      }
    );
  }

  public emailInput(): void {
    this.isShowTooltipEmail = !this.form.get('email')?.errors?.pattern;
  }

  public passwordInput(): void {
    this.isShowTooltipPassword = !this.form.get('password')?.errors?.pattern;
  }
}

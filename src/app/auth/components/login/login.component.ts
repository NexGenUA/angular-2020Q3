import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalDataService } from '../../../shared/services/local-data.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { ClearUserLoginErrorAction, UserLoginRequestAction } from '../../../store/actions/user.action';
import { loginUser, messageErrorUser } from '../../../store/selectors/user.selector';
import { User } from '../../../shared/models/user.model';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private errorHandle$: Observable<string> = this.store$.pipe(select(messageErrorUser));
  private loggedUser$: Observable<User> = this.store$.pipe(select(loginUser));

  public form: FormGroup;
  public isLoading: boolean = false;
  public login$: Subscription;
  public error$: Subscription;

  constructor(
    private localData: LocalDataService,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private store$: Store,
  ) { }

  public ngOnInit(): void {
    this.auth.setToken(null);
    this.localData.deleteUser();
    this.localData.clearAuthData();

    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  public ngOnDestroy(): void {
    if (this.login$) {
      this.login$.unsubscribe();
    }
    if (this.error$) {
      this.error$.unsubscribe();
    }
  }

  public login(): void {
    this.isLoading = true;
    this.form.disable();
    this.store$.dispatch(new UserLoginRequestAction(this.form.value));
    this.store$.dispatch(new ClearUserLoginErrorAction());
    this.login$ = this.loggedUser$.subscribe(
      res => {
        if (res) {
          this.localData.setUser(res);
          this.router.navigate(['/search']);
          this.isLoading = false;
        }
      });
    this.error$ = this.errorHandle$.subscribe(
      error => {
        if (error) {
          this.form.enable();
          this.isLoading = false;
          this.snackBar.open(error, 'Connection error', {
            duration: 3000,
          });
        }
      }
    );
  }
}

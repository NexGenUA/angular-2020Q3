import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalDataService } from '../../../shared/services/local-data.service';
import { UserBlockService } from '../../../shared/services/user-block.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public isLoading: boolean = false;
  public login$: Subscription;

  constructor(
    private localData: LocalDataService,
    private userBlockService: UserBlockService,
    private auth: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  public ngOnInit(): void {
    this.auth.setToken(null);
    this.userBlockService.setUser(null);
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
  }

  public login(): void {
    this.isLoading = true;
    this.form.disable();
    this.login$ = this.auth.login(this.form.value).subscribe(
      (res) => {
        this.localData.setUser(res);
        this.userBlockService.setUser(res);
        this.router.navigate(['/']);
        this.isLoading = false;
      },
      error => {
        this.form.enable();
        this.isLoading = false;
        this.snackBar.open(error.error, 'Connection error', {
          duration: 5000,
        });
      }
    );
  }
}

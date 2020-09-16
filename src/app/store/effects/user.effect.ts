import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { userActionType } from '../state.model';
import { catchError, map, switchMap } from 'rxjs/operators';
import { userActions, UserErrorLoginAction, UserLoginAction, UserLoginRequestAction } from '../actions/user.action';
import { AuthService } from '../../shared/services/auth.service';
import { of } from 'rxjs';
import { errMessage, errStatus } from '../../shared/enum-err-status';

@Injectable()
export class UserEffect {
  public userLogin$: CreateEffectMetadata = createEffect(() => this.actions$.pipe(
    ofType(userActionType.loginRequestUser),
    switchMap((action: userActions) => {
      return this.authService.login((action as UserLoginRequestAction).payload).pipe(
        map(res => new UserLoginAction(res)),
        catchError(err => {
          const { status } = err;
          if (status === errStatus.FORBIDDEN || status === errStatus.NOT_FOUND) {
            return of(new UserErrorLoginAction(errMessage.WRONG_ENTITY));
          }
          return of(new UserErrorLoginAction(errMessage.SERVER_ERROR));
        })
      );
    }),
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }
}

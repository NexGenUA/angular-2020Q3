import { Action } from '@ngrx/store';
import { userActionType } from '../state.model';
import { LoginUser, User } from '../../shared/models/user.model';

export class UserCreateAction implements Action {
  public readonly type: string = userActionType.createUser;
}

export class UserLoginRequestAction implements Action {
  public readonly type: string = userActionType.loginRequestUser;
  constructor(public payload: LoginUser) { }
}

export class UserLoginAction implements Action {
  public readonly type: string = userActionType.loginUser;
  constructor(public payload: User) { }
}

export class UserErrorLoginAction implements Action {
  public readonly type: string = userActionType.loginErrorUser;
  constructor(readonly payload: string) { }
}

export class ClearUserLoginErrorAction implements Action {
  public readonly type: string = userActionType.clearLoginErrorUser;
}

export type userActions = UserCreateAction | UserLoginAction | UserErrorLoginAction;

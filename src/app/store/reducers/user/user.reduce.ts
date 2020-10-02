import { ActionReducer } from '@ngrx/store';
import { userActions, UserErrorLoginAction, UserLoginAction } from '../../actions/user.action';
import { LoggedUser, userActionType } from '../../state.model';

const initialState: LoggedUser = {
  user: null,
  error: '',
};

export const userReducer: ActionReducer<LoggedUser> = (
  state: LoggedUser = initialState,
  action: userActions,
): LoggedUser => {
  switch (action.type) {
    case userActionType.loginUser:
      return {
        ...state,
        user: (action as UserLoginAction).payload,
        error: '',
      };
    case userActionType.loginErrorUser:
      return {
        ...state,
        user: null,
        error: (action as UserErrorLoginAction).payload,
      };
    case userActionType.clearLoginErrorUser:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

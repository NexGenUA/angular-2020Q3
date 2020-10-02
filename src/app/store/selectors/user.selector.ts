import { createFeatureSelector, createSelector, Selector } from '@ngrx/store';
import { LoggedUser, nodes, State } from '../state.model';
import { User } from '../../shared/models/user.model';

const getUserFeature: Selector<State, LoggedUser> =
  createFeatureSelector<LoggedUser>(nodes.user);

export const loginUser: Selector<State, User> = createSelector(
  getUserFeature,
  (state: LoggedUser): User => state.user,
);

export const messageErrorUser: Selector<State, string> = createSelector(
  getUserFeature,
  (state: LoggedUser): string => state.error,
);

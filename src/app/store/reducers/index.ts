import { ActionReducerMap } from '@ngrx/store';
import { nodes, State } from '../state.model';
import { youtubeItemsReducer } from './youtube-items/youtube-items.reducer';
import { userReducer } from './user/user.reduce';
import { createItemReducer } from './createItems/create-items.reducer';

export const reducers: ActionReducerMap<State> = {
  [nodes.youtubeItems]: youtubeItemsReducer,
  [nodes.createItems]: createItemReducer,
  [nodes.user]: userReducer,
};

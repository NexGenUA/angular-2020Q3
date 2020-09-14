import { ActionReducerMap } from '@ngrx/store';
import { nodes, State } from '../state.model';
import { addItemsReducer } from './addedItems/add-items.reducer';
import { youtubeItemsReducer } from './youtube-items/youtube-items.reducer';
import { userReducer } from './user/user.reduce';

export const reducers: ActionReducerMap<State> = {
  [nodes.youtubeItems]: youtubeItemsReducer,
  // [user]: userReducer,
  // [addedItems]: addItemsReducer,
};

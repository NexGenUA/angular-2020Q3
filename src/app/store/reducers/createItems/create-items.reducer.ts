import { ActionReducer } from '@ngrx/store';
import { createItemType, YoutubeItems } from '../../state.model';
import { createItemActions } from '../../actions/create-item.action';

const initialState: YoutubeItems = {
  items: [],
  isData: false,
};

export const createItemReducer: ActionReducer<YoutubeItems> = (
  state: YoutubeItems = initialState,
  action: createItemActions
): YoutubeItems => {
  switch (action.type) {
    case createItemType.createItem:
      return {
        ...state,
        items: [...state.items, action.payload],
        isData: true,
      };
    default:
      return state;
  }
};

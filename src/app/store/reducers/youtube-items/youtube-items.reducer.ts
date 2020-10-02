import { ActionReducer } from '@ngrx/store';
import { MakeRequestAction, youtubeActions } from '../../actions/youtube-items.action';
import { youtubeActionType, YoutubeItems } from '../../state.model';

const initialState: YoutubeItems = {
  items: [],
  isData: false,
};

export const youtubeItemsReducer: ActionReducer<YoutubeItems> = (
  state: YoutubeItems = initialState,
  action: youtubeActions
): YoutubeItems => {
  switch (action.type) {
    case youtubeActionType.makeRequest:
      return {
        ...state,
        items: (action as MakeRequestAction).payload.items,
        isData: (action as MakeRequestAction).payload.isData,
      };
    default:
      return state;
  }
};

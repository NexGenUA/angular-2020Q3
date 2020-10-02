import { Action } from '@ngrx/store';
import { youtubeActionType, YoutubeItems } from '../state.model';

export class YoutubeAction implements Action {
  public readonly type: string = youtubeActionType.getItems;
  constructor(public query: string) { }
}

export class MakeRequestAction implements Action {
  public readonly type: string = youtubeActionType.makeRequest;
  constructor(public payload: YoutubeItems) { }
}

export type youtubeActions = MakeRequestAction | YoutubeAction;

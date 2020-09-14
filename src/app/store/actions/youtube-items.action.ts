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

// export class CountClearAction implements Action {
//   readonly type = countActionType.clear;
// }
//
// export class CountUpdatedAtAction implements Action {
//   readonly type = countActionType.updatedAt;
//   constructor(public payload: UpdateAtPayload) { }
// }

export type youtubeActions = MakeRequestAction | YoutubeAction;

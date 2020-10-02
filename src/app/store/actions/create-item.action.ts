import { Action } from '@ngrx/store';
import { createItemActionType } from '../state.model';
import { SearchItem } from '../../shared/models/search-item.model';

export class CreateAction implements Action {
  public readonly type: string = createItemActionType.createItem;
  constructor(public payload: SearchItem) { }
}

export type createItemActions = CreateAction;

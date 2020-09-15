import { Action } from '@ngrx/store';
import { createItemType } from '../state.model';
import { SearchItem } from '../../shared/models/search-item.model';

export class CreateAction implements Action {
  public readonly type: string = createItemType.createItem;
  constructor(public payload: SearchItem) { }
}

export type createItemActions = CreateAction;

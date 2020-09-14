import { SearchItem } from '../shared/models/search-item.model';
import { User } from '../shared/models/user.model';

export interface State {
  youtubeItems: YoutubeItems;
  // user: User;
  // addedItems: SearchItem[];
}

export interface YoutubeItems {
  items: SearchItem[];
  isData: boolean;
}

export enum nodes {
  youtubeItems = 'youtubeItems',
  user = 'user',
  addedItems = 'addedItems',
}

export enum youtubeActionType {
  getItems = '[ITEMS] get',
  makeRequest = '[ITEMS] request',
}

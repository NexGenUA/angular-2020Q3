import { SearchItem } from '../shared/models/search-item.model';
import { User } from '../shared/models/user.model';

export interface State {
  youtubeItems: YoutubeItems;
  createItems: YoutubeItems;
  // user: User;
}

export interface YoutubeItems {
  items: SearchItem[];
  isData: boolean;
}

export interface CreateItem {
  title: string;
  description: string;
  image: string;
  linkVideo: string;
  date: string;
}

export enum nodes {
  youtubeItems = 'youtubeItems',
  user = 'user',
  createItems = 'createItems',
}

export enum youtubeActionType {
  getItems = '[YOUTUBE-ITEMS] get',
  makeRequest = '[YOUTUBE-ITEMS] request',
}

export enum createItemType {
  createItem = '[CREATE-ITEMS] create'
}

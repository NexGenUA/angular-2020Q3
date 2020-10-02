import { SearchItem } from '../shared/models/search-item.model';
import { User } from '../shared/models/user.model';

export interface State {
  youtubeItems: YoutubeItems;
  createItems: YoutubeItems;
  user: LoggedUser;
}

export interface LoggedUser {
  user: User;
  error: string;
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

export enum createItemActionType {
  createItem = '[CREATE-ITEMS] create',
}

export enum userActionType {
  createUser = '[USER] - create',
  loginUser = '[USER] - login',
  loginRequestUser = '[USER] - loginRequest',
  registerRequestUser = '[USER] - registerRequest',
  loginErrorUser = '[USER] - loginError',
  clearLoginErrorUser = '[USER] - clearLoginError',
}

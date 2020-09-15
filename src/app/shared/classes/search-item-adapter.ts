import { SearchItem, Snippet } from '../models/search-item.model';
import { CreateItem } from '../../store/state.model';

export class SearchItemAdapter implements SearchItem {
  public snippet: Snippet = {
    title: '',
    description: '',
    publishedAt: '',
    thumbnails: {
      maxres: {
        url: ''
      },
      medium: {
        url: ''
      }
    }
  };

  constructor(createItem: CreateItem) {
    this.snippet.title = createItem.title;
    this.snippet.description = createItem.description;
    this.snippet.publishedAt = new Date().toString();
    this.snippet.thumbnails.medium.url = createItem.image;
    this.snippet.thumbnails.maxres.url = createItem.image;
  }
}

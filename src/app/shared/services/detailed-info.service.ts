import { EventEmitter, Injectable } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Injectable({ providedIn: 'root' })
export class DetailedInfoService {
  public show: EventEmitter<SearchItem> = new EventEmitter<SearchItem>();
}

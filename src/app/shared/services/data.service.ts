import { EventEmitter, Injectable } from '@angular/core';
import { SortWord } from '../interfaces';

@Injectable({providedIn: 'root'})
export class DataService {
  public query: EventEmitter<string> = new EventEmitter<string>();
  public sortData: EventEmitter<SortWord> = new EventEmitter<SortWord>();
}

import { Component, Input } from '@angular/core';
import { SortWord } from '../../shared/interfaces';
import { HttpService } from '../../shared/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItem } from '../../shared/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  private _query: string;

  @Input() public sortData: SortWord;
  @Input()
  public set queryString(value: string) {
    this._query = value;
    this.getData(value);
  }

  public get queryString(): string {
    return this._query;
  }

  public data: Observable<SearchItem[]> = null;

  constructor(private httpService: HttpService) {}

  private getData(query: string): void {
    if (query) {
      this.data = this.httpService.getData(query).pipe(map(d => d.items));
    }
  }

}

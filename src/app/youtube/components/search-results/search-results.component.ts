import { Component, Input } from '@angular/core';
import { SortWord } from '../../../shared/interfaces';
import { HttpService } from '../../../shared/services/http.service';
import { Observable } from 'rxjs';
import { SearchResponse } from '../../../shared/models/search-response.model';
import { DataService } from '../../../shared/services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  public sortData: SortWord;

  public data: Observable<SearchResponse> = null;

  constructor(
    private httpService: HttpService,
    private dataService: DataService
  ) {
    this.dataService.query.subscribe((query) => {
      if (query) {
        this.data = this.httpService.getData(query);
      }
    });

    this.dataService.sortData.subscribe((sortData) => {
        this.sortData = sortData;
    });
  }
}

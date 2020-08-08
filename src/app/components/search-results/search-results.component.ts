import { Component, Input } from '@angular/core';
import { mockData } from '../../shared/mock-data';
import { SearchResponse } from '../../shared/models/search-response.model';
import { SortWord } from '../../shared/interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public data: SearchResponse = mockData;
  @Input() public sortData: SortWord;
}

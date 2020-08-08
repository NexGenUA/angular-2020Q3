import { Component } from '@angular/core';
import { mockData } from '../../shared/mock-data';
import { SearchResponse } from '../../shared/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  public data: SearchResponse = mockData;
}

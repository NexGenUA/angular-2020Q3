import { Component } from '@angular/core';
import { SortWord } from '../../../shared/interfaces';
import { HttpService } from '../../../shared/services/http.service';
import { SearchResponse } from '../../../shared/models/search-response.model';
import { DataService } from '../../../shared/services/data.service';
import { SearchItem } from '../../../shared/models/search-item.model';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  public sortData: SortWord;
  public detailedInfo: SearchItem = null;
  public data: SearchResponse = null;

  constructor(
    private httpService: HttpService,
    private dataService: DataService,
    private detailedInfoService: DetailedInfoService,
  ) {
    this.dataService.query.subscribe((query) => {
      if (query) {
        this.httpService.getData(query).subscribe(data => {
          this.data = data;
        });
      }
    });

    this.dataService.sortData.subscribe((sortData) => {
      this.sortData = sortData;
    });
    this.detailedInfoService.show.subscribe(info => {
      this.detailedInfo = info;
    });
  }
}

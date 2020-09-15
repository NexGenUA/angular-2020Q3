import { Component, OnDestroy } from '@angular/core';
import { SortWord } from '../../../shared/interfaces';
import { HttpService } from '../../../shared/services/http.service';
import { SearchResponse } from '../../../shared/models/search-response.model';
import { DataService } from '../../../shared/services/data.service';
import { SearchItem } from '../../../shared/models/search-item.model';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';
import { Observable, Subscription } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { getYoutubeItems, youtubeItemsIsLoad } from '../../../store/selectors/youtube-items.selector';
import { YoutubeAction } from '../../../store/actions/youtube-items.action';
import { getCreateItems, isCreateItems } from '../../../store/selectors/create-item.selector';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnDestroy {

  private httpService$: Subscription;
  private readonly dataServiceQuery$: Subscription;
  private readonly dataServiceSortData$: Subscription;
  private readonly detailedInfoService$: Subscription;
  private subscribers: Subscription[] = [];

  public sortData: SortWord;
  public detailedInfo: SearchItem = null;
  public data: SearchResponse = null;
  public youtubeItems$: Observable<SearchItem[]> = this.store$.pipe(select(getYoutubeItems));
  public youtubeItemsIsLoad$: Observable<boolean> = this.store$.pipe(select(youtubeItemsIsLoad));
  public createItems$: Observable<SearchItem[]> = this.store$.pipe(select(getCreateItems));
  public isCreateItems: Observable<boolean> = this.store$.pipe(select(isCreateItems));

  constructor(
    private httpService: HttpService,
    private dataService: DataService,
    private detailedInfoService: DetailedInfoService,
    private store$: Store,
  ) {
    this.dataServiceQuery$ = this.dataService.query.subscribe((query) => {
      if (query) {
        this.httpService$ = this.httpService.getData(query).subscribe(data => {
          this.data = data;
        });
        this.subscribers.push(this.httpService$);
      }
    });

    this.dataServiceSortData$ = this.dataService.sortData.subscribe((sortData) => {
      this.sortData = sortData;
    });
    this.detailedInfoService$ = this.detailedInfoService.show.subscribe(info => {
      this.detailedInfo = info;
    });
    this.subscribers.push(this.dataServiceQuery$);
    this.subscribers.push(this.dataServiceSortData$);
    this.subscribers.push(this.detailedInfoService$);
  }

  public ngOnDestroy(): void {
    this.subscribers.forEach(subscriber => {
      subscriber.unsubscribe();
    });
  }

  public dispatch(): void {
    this.store$.dispatch(new YoutubeAction('javascript'));
  }
}

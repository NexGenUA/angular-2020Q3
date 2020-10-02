import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { environment } from '../../../environments/environment.prod';
import { queryValues } from '../enums';
import { switchMap, map } from 'rxjs/operators';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private getStats(ids: string): Observable<SearchResponse> {
    const url: URL = new URL(environment.url);
    url.pathname = 'youtube/v3/videos';
    const params: Params = new HttpParams()
      .set('id', ids)
      .set('part', queryValues.partStats);
    return this.http.get<SearchResponse>(url.href, { params });
  }

  public getData(query: string): Observable<SearchResponse> {
    const url: URL = new URL(environment.url);
    url.pathname = 'youtube/v3/search';
    const params: Params = new HttpParams()
      .set('part', queryValues.part)
      .set('maxResults', queryValues.maxResults)
      .set('q', query);
    return this.http.get<SearchResponse>(url.href, { params }).pipe(
      map(res => res.items.map(item => item.id.videoId).join()),
      switchMap(ids =>  this.getStats(ids))
    );
  }
}

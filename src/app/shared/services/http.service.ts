import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { environment } from '../../../environments/environment.prod';
import { queryValues } from '../enums';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private getStats(ids: string): Observable<SearchResponse> {
    const url: URL = new URL(environment.url);
    url.pathname = 'youtube/v3/videos';
    url.searchParams.append('key', environment.YOUTUBE_API_KEY);
    url.searchParams.append('id', ids);
    url.searchParams.append('part', queryValues.partStats);
    return this.http.get<SearchResponse>(url.href);
  }

  public getData(query: string): Observable<SearchResponse> {
    const url: URL = new URL(environment.url);
    url.pathname = 'youtube/v3/search';
    url.searchParams.append('key', environment.YOUTUBE_API_KEY);
    url.searchParams.append('type', queryValues.type);
    url.searchParams.append('part', queryValues.part);
    url.searchParams.append('maxResults', queryValues.maxResults);
    url.searchParams.append('q', query);
    return this.http.get<SearchResponse>(url.href).pipe(
      switchMap(res => {
        const ids: string[] = res.items.map(item => item.id.videoId);
        return this.getStats(ids.join());
      })
    );
  }
}

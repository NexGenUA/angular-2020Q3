import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getData(key: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>('./assets/mock-response.json');
  }
}

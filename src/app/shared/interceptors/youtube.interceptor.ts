import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqClone: HttpRequest<unknown>;
    if (req.url.includes('googleapis.com') && req.method === 'GET') {
      reqClone = req.clone({
        setParams: {
          key: environment.YOUTUBE_API_KEY,
        }
      });
    } else {
      reqClone = req;
    }
    return next.handle(reqClone);
  }
}

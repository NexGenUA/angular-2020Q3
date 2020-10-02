import { Injectable } from '@angular/core';
import { Actions, createEffect, CreateEffectMetadata, ofType } from '@ngrx/effects';
import { youtubeActionType } from '../state.model';
import { map, switchMap } from 'rxjs/operators';
import { HttpService } from '../../shared/services/http.service';
import { MakeRequestAction, YoutubeAction, youtubeActions } from '../actions/youtube-items.action';

@Injectable()
export class YoutubeEffect {
  public loadYoutubeItems$: CreateEffectMetadata  = createEffect(() => this.actions$.pipe(
    ofType(youtubeActionType.getItems),
    switchMap((action: youtubeActions) => {
      return this.httpService.getData((action as YoutubeAction).query).pipe(
        map(res => new MakeRequestAction({
          items: res.items,
          isData: true
        }))
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private httpService: HttpService
  ) { }
}

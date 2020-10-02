import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';
import { select, Store } from '@ngrx/store';
import { YoutubeAction } from '../../../store/actions/youtube-items.action';
import { loginUser } from '../../../store/selectors/user.selector';
import { UserLoginAction } from '../../../store/actions/user.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  private input$: Subject<string> = new Subject<string>();
  private userBlock$: Subscription;

  @Output() public show: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  public inputValue: string = '';
  public user$: Observable<User> = this.store$.pipe(select(loginUser));

  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private detailedInfoService: DetailedInfoService,
    private store$: Store,
  ) {

    this.input$.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      filter(value => value.trim().length > 2)
    ).subscribe(queryString => {
      this.dataService.sortData.emit(null);
      this.store$.dispatch(new YoutubeAction(queryString));
      this.detailedInfoService.show.emit(null);
    });
  }

  public ngOnDestroy(): void {
    this.input$.unsubscribe();
    this.userBlock$.unsubscribe();
  }

  public inputChange(event: Event): void {
    const {value} = (event.target as HTMLInputElement);
    this.input$.next(value);
  }

  public showFilter(): void {
    this.show.emit();
  }

  public logout(): void {
    this.store$.dispatch(new UserLoginAction(null));
    this.auth.logout();
  }
}

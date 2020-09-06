import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { User } from '../../../shared/models/user.model';
import { UserBlockService } from '../../../shared/services/user-block.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { DetailedInfoService } from '../../../shared/services/detailed-info.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  private input$: Subject<string> = new Subject<string>();
  private userBlock$: Subscription;

  @Output() public show: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  public user: User = null;
  public inputValue: string = '';

  constructor(
    private dataService: DataService,
    private userBlockService: UserBlockService,
    private auth: AuthService,
    private detailedInfoService: DetailedInfoService,
  ) {
    this.userBlock$ = this.userBlockService.updateUser.subscribe((user) => {
      this.user = user;
    });

    this.input$.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      filter(value => value.trim().length > 2)
    ).subscribe(queryString => {
      this.dataService.sortData.emit(null);
      this.dataService.query.emit(queryString);
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
    this.auth.logout();
  }
}

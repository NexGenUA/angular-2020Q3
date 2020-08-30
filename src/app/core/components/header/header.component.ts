import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../../../shared/services/data.service';
import { User } from '../../../shared/models/user.model';
import { UserBlockService } from '../../../shared/services/user-block.service';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public show: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  public user: User = null;
  public inputValue: string = '';

  constructor(
    private dataService: DataService,
    private userBlockService: UserBlockService,
    private auth: AuthService,
    ) {
    this.userBlockService.updateUser.subscribe((user) => {
      this.user = user;
    });
  }

  public showFilter(): void {
    this.show.emit();
  }

  public search(queryString: string): void {
    this.dataService.sortData.emit(null);
    this.dataService.query.emit(queryString);
  }

  public logout(): void {
    this.auth.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { LocalDataService } from './shared/services/local-data.service';
import { AuthService } from './shared/services/auth.service';
import { Store } from '@ngrx/store';
import { User } from './shared/models/user.model';
import { UserLoginAction } from './store/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public show: Boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private localData: LocalDataService,
    private auth: AuthService,
    private store$: Store
  ) { }

  private getChild(activatedRoute: ActivatedRoute): ActivatedRoute {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  public ngOnInit(): void {
    const token: string = this.localData.getToken();
    const refreshToken: string = this.localData.getRefreshToken();
    const userId: string = this.localData.getUserId();
    const user: User = this.localData.getUser();

    if (user) {
      this.store$.dispatch(new UserLoginAction(user));
    }

    if (token) {
      this.auth.setToken(token);
    }

    if (refreshToken) {
      this.auth.setRefreshToken(refreshToken);
    }

    if (userId) {
      this.auth.setUserId(userId);
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt: ActivatedRoute = this.getChild(this.activatedRoute);
      rt.data.subscribe(data => {
        this.titleService.setTitle(data.title);
      });
    });
  }

  public showFilter(): void {
    this.show = !this.show;
  }
}

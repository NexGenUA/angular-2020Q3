import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../models/login-response.model';
import { tap } from 'rxjs/operators';
import { UserCreate } from '../models/user-create.model';
import { UserCreateResponse } from '../models/user-create-response.model';
import { LocalDataService } from './local-data.service';
import { UserBlockService } from './user-block.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Injectable({ providedIn: 'root'})
export class AuthService {
  private url: URL;
  private token: string = null;
  private refreshToken: string = null;
  private id: string;

  constructor(
    private http: HttpClient,
    private localData: LocalDataService,
    private userBlockService: UserBlockService,
    private router: Router
  ) {
    this.url = new URL(environment.api_url);
  }

  public setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
  }

  public logout(): void {
    this.setToken(null);
    this.setRefreshToken(null);
    this.userBlockService.setUser(null);
    this.setUserId(null);
    this.localData.deleteUser();
    this.localData.clearAuthData();
    this.router.navigate(['/login']);
  }

  public login(user: LoginResponse): Observable<LoginResponse> {
    this.url.pathname = 'signin';
    const url: string = this.url.toString();
    return this.http.post<LoginResponse>(url, user).pipe(
      tap(({refreshToken, token, userId}) => {
        this.localData.setAuthData({refreshToken, token, userId});
        this.setToken(token);
        this.setRefreshToken(refreshToken);
        this.setUserId(userId);
      })
    );
  }

  public register(user: UserCreate): Observable<UserCreateResponse> {
    this.url.pathname = 'users';
    const url: string = this.url.href;
    return this.http.post<UserCreateResponse>(url, user);
  }

  public isAuthenticated(): boolean {
    return Boolean(this.token);
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public setUserId(id: string): void {
    this.id = id;
  }
}

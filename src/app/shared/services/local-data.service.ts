import { Injectable } from '@angular/core';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  public setAuthData(data: AuthData): void {
    localStorage.setItem('token', data.token);
    localStorage.setItem('refreshToken', data.refreshToken);
    localStorage.setItem('userId', data.userId);
  }

  public clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
  }

  public setUser(user: User): void {
    localStorage.setItem('name', user.name);
    localStorage.setItem('email', user.email);
  }

  public getUser(): User {
    const name: string = localStorage.getItem('name');
    const email: string = localStorage.getItem('email');

    if (name && email) {
      return {name, email};
    }

    return null;
  }

  public deleteUser(): void {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  public getUserId(): string {
    return localStorage.getItem('userId');
  }
}

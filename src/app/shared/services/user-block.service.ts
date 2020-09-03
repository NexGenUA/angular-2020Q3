import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserBlockService {
  private user: User = null;

  public updateUser: EventEmitter<User> = new EventEmitter<User>();

  public setUser(user: User): void {
    this.updateUser.emit(user);
  }
}

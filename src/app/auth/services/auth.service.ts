import { Injectable, OnInit } from '@angular/core';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { User } from '../../shared/entities/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private userNameLocalStorageKey = 'name';
  private tokenLocalStorageKey = 'token';
  private user: UserInterface;

  ngOnInit() {
    this.user = new User(1, 'John', 'Doe');
  }

  login(): void {
    if (!this.isAuthenticated()) {
      localStorage.setItem(this.userNameLocalStorageKey, this.user.getFullName());
      localStorage.setItem(this.tokenLocalStorageKey, '1');
    }
  }

  logout(): void {
    if (this.isAuthenticated()) {
      localStorage.removeItem(this.userNameLocalStorageKey);
      localStorage.removeItem(this.tokenLocalStorageKey);
    }
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenLocalStorageKey);
  }

  getUserInfo(): string {
    return this.isAuthenticated() ? localStorage.getItem(this.userNameLocalStorageKey) : '';
  }
}

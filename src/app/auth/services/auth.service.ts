import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userNameLocalStorageKey = 'name';
  private tokenLocalStorageKey = 'token';
  private user = 'John Doe';

  login(): void {
    if (!this.isAuthenticated()) {
      localStorage.setItem(this.userNameLocalStorageKey, this.user);
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

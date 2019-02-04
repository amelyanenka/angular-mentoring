import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userNameLocalStorageKey = 'name';
  private tokenLocalStorageKey = 'token';
  private name = 'John Doe';
  private pass = 'qwerty';

  login(name: string, pass: string): void {
    localStorage.setItem(this.userNameLocalStorageKey, name);
    localStorage.setItem(this.tokenLocalStorageKey, '1');
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

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private name = 'John Doe';
  private pass = 'qwerty';

  login(): void {}

  logout(): void {}

  isAuthenticated(): boolean {}

  getUserInfo(): string {}
}

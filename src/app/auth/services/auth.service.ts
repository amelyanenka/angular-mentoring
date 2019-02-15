import { Injectable } from '@angular/core';
import { UserInterface } from '../../shared/interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userNameLocalStorageKey = 'name';
  private tokenLocalStorageKey = 'token';
  private users: UserInterface[] = [
    {
      id: 1,
      name: 'John Doe',
      pass: '123'
    },
    {
      id: 2,
      name: 'Vadzim Yermalitski',
      pass: '123'
    },
    {
      id: 3,
      name: 'Vasily',
      pass: '123'
    },
    {
      id: 4,
      name: 'Ivan Amelyanenka',
      pass: '123'
    },
    {
      id: 5,
      name: 'noname',
      pass: '123'
    }
  ];

  constructor(private router: Router) {}

  login(name, pass): void {
    const authUser = this.users.find(user => user.name === name);
    if (!this.isAuthenticated() && authUser && authUser.pass === pass) {
      localStorage.setItem(this.userNameLocalStorageKey, authUser.name);
      localStorage.setItem(this.tokenLocalStorageKey, '1');
      this.router.navigateByUrl('/courses');
    } else {
      alert('Wrong name or password');
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

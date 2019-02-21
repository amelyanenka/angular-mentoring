import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenLocalStorageKey = 'token';
  private users: UserInterface[];

  constructor(private router: Router, private http: HttpClient) {}

  private getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('http://localhost:3004/users');
  }

  public login(login, password): void {
    this.getUsers().subscribe(result => {
      this.users = result;
      const authUser: UserInterface = this.users.find(user => user.login === login);
      if (!this.isAuthenticated() && authUser && authUser.password === password) {
        localStorage.setItem(this.tokenLocalStorageKey, authUser.token);
        this.router.navigate(['courses']);
      } else {
        alert('Wrong login or password');
      }
    });
  }

  public logout(): void {
    localStorage.removeItem(this.tokenLocalStorageKey);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenLocalStorageKey);
  }

  public getUserFullName(): string {
    if (!this.users) {
      this.getUsers().subscribe(result => {
        this.users = result;
      });
    }
    const token: string = localStorage.getItem(this.tokenLocalStorageKey);
    const authUser: UserInterface = this.users.find(user => user.token === token);
    return `${authUser.name.first} ${authUser.name.last}`;
  }
}

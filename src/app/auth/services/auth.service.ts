import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userInfoSubject = new Subject<UserInterface>();
  public tokenLocalStorageKey = 'token';
  private URL = 'http://localhost:3004/auth';

  constructor(private router: Router, private http: HttpClient) {
    this.getUserInfo();
  }

  public login(login: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.URL}/login`, {login, password})
      .pipe(
        tap((result: any) => {
          localStorage.setItem(this.tokenLocalStorageKey, result.token);
          this.getUserInfo();
        })
      );
  }

  public logout(): void {
    localStorage.removeItem(this.tokenLocalStorageKey);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenLocalStorageKey);
  }

  public getUserInfo(): void {
    if (this.isAuthenticated()) {
      this.http.post<UserInterface>(`${this.URL}/userinfo`, {token: localStorage.getItem(this.tokenLocalStorageKey)})
        .subscribe((user: UserInterface) => this.userInfoSubject.next(user));
    }
  }
}

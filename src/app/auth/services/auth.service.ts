import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NameInterface } from '../../shared/interfaces/name.interface';
import { UserInterface } from '../../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public name: NameInterface;
  public tokenLocalStorageKey = 'token';
  private URL = 'http://localhost:3004/auth';

  constructor(private router: Router, private http: HttpClient) {}

  public login(login: string, password: string): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.URL}/login`, {login, password});
  }

  public logout(): void {
    localStorage.removeItem(this.tokenLocalStorageKey);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenLocalStorageKey);
  }

  public getUserInfo(): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.URL}/userinfo`, {token: localStorage.getItem(this.tokenLocalStorageKey)});
  }
}

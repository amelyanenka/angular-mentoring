import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  public getUserFullName(): string {
    return this.authService.getUserFullName();
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}

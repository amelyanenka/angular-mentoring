import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public user: string;
  public pass: string;

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login();
  }
}

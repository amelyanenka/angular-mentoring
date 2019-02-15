import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public name: string;
  public pass: string;

  constructor(private authService: AuthService) {}

  onLogin(name, pass): void {
    this.authService.login(name, pass);
  }
}

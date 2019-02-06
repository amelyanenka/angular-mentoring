import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public user: UserInterface;
  public pass: string;

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login();
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public login: string;
  public password: string;

  constructor(private router: Router, private authService: AuthService) {}

  public onLogin(): void {
    this.authService.login(this.login, this.password).subscribe(() => this.router.navigate(['courses']), error => alert(error.error));
  }
}

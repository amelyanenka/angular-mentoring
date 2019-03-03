import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { UserInterface } from '../../interfaces/user.interface';
import { NameInterface } from '../../interfaces/name.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name: NameInterface = {
    first: '',
    last: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  public ngOnInit() {
    this.authService.userInfoSubject.subscribe((user: UserInterface) => {
      if (user) {
        this.name = user.name;
      }
    });
  }

  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}

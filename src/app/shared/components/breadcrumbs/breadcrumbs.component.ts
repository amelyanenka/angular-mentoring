import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  constructor(private router: Router) {}

  getBreadcrumbsLength() {
    return this.router.url.slice(1).split('/').length;
  }

  getBreadcrumbs() {
    return this.router.url.slice(1).split('/');
  }

  navigateFromBreadcrumbs(breadcrumb: string): void {
    this.router.navigate([breadcrumb]);
  }
}

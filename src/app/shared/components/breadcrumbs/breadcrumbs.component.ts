import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  constructor(private router: Router, private coursesService: CoursesService) {}

  getBreadcrumbsLength() {
    return this.router.url.slice(1).split('/').length;
  }

  getBreadcrumbs() {
    return this.router.url.slice(1).split('/');
  }

  getLastBreadcrumb() {
    const breadcrumbs: string[] = this.getBreadcrumbs();
    let lastBreadcrumb: string = breadcrumbs[breadcrumbs.length - 1];
    if (lastBreadcrumb !== 'new') {
      lastBreadcrumb = this.coursesService.getCourseById(+lastBreadcrumb).title;
    }
    return lastBreadcrumb;
  }

  navigateFromBreadcrumbs(index: number): void {
    const breadcrumbs: string[] = this.getBreadcrumbs();
    let navigateBreadcrumbs = '/';

    for (let i = 0; i < index + 1; i++) {
      navigateBreadcrumbs += breadcrumbs[i];
      if (i !== index) {
        navigateBreadcrumbs += '/';
      }
    }

    this.router.navigateByUrl(navigateBreadcrumbs);
  }
}

import { Routes } from '@angular/router';
import { CanActivateGuard } from './shared/guards/canactivate.guard';
import { CoursesComponent } from './courses/components/courses/courses.component';
import { AuthComponent } from './auth/components/auth/auth.component';
import { NoContentComponent } from './shared/components/no-content/no-content.component';
import { AddCourseComponent } from './add-course/components/add-course/add-course.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},

  // redirect to
  {path: 'courses', component: CoursesComponent, canActivate: [CanActivateGuard]},

  // pages
  {path: 'courses/:id', component: AddCourseComponent, canActivate: [CanActivateGuard]},
  {path: 'courses/new', component: AddCourseComponent, canActivate: [CanActivateGuard]},
  {path: 'auth', component: AuthComponent},

  // 404
  {path: '**', component: NoContentComponent}
];

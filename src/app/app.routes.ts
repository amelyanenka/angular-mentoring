import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/components/courses/courses.component';
import { NoContentComponent } from './shared/components/no-content/no-content.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},

  // redirect to
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:id', component: CoursesComponent},
  {path: 'courses/new', component: CoursesComponent},

  // 404
  {path: '**', component: NoContentComponent}
];

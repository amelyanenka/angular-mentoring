import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [CoursesComponent, CourseComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent,
    CourseComponent,
    SearchComponent
  ]
})
export class CoursesModule { }

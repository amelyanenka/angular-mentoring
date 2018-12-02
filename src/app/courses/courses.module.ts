import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { SearchComponent } from './search/search.component';

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

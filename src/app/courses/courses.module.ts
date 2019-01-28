import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';
import { BorderDirective } from './directives/border.directive';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    SearchComponent,
    BorderDirective
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CoursesComponent,
    CourseComponent,
    SearchComponent
  ]
})
export class CoursesModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    SearchComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule {}

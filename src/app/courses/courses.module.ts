import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { SearchComponent } from './components/search/search.component';
import { BorderDirective } from './directives/border.directive';
import { TimePipe } from './pipes/time.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    SearchComponent,
    BorderDirective,
    TimePipe,
    OrderByPipe,
    SearchPipe
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    CoursesComponent,
    CourseComponent,
    SearchComponent
  ],
  providers: [
    SearchPipe
  ]
})
export class CoursesModule {}

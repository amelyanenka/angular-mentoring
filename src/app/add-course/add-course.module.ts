import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CreationComponent } from './components/creation/creation.component';
import { DurationComponent } from './components/duration/duration.component';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [
    AddCourseComponent,
    CreationComponent,
    DurationComponent,
    AuthorsComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AddCourseComponent
  ]
})
export class AddCourseModule {}

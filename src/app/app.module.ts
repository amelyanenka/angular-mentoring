import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
// import { AuthModule } from './auth/auth.module';
// import { AddCourseModule } from './add-course/add-course.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoursesModule,
    // AuthModule,
    // AddCourseModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { CanActivateGuard } from './shared/guards/canactivate.guard';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { AddCourseModule } from './add-course/add-course.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    HttpClientModule,
    SharedModule,
    CoursesModule,
    AuthModule,
    AddCourseModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CanActivateGuard
  ]
})
export class AppModule {}

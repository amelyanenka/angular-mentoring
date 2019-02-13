import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoursesModule } from './courses/courses.module';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/components/courses/courses.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},

  // redirect to
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/:id', component: CoursesComponent},
  {path: 'courses/new', component: CoursesComponent},

  // 404
  // {path: '**', component: NoContentComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
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

import { Component, OnInit } from '@angular/core';
import {Course} from '../course';
import {CoursesService} from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  addCourse(course: Course): Course[] {
    this.courses.push(course);
    return this.courses;
  }

  deleteCourse(course: Course): Course[] {
    this.courses.splice(this.courses.findIndex(course), 1);
    return this.courses;
  }
}

import { Component, OnInit } from '@angular/core';
import { CourseInterface } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: CourseInterface[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  addCourse(course: CourseInterface): CourseInterface[] {
    this.courses.push(course);
    return this.courses;
  }

  deleteCourse(course: CourseInterface): CourseInterface[] {
    this.courses.splice(this.courses.findIndex(course), 1);
    return this.courses;
  }
}

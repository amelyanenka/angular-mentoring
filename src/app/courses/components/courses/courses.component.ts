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

  onSearch(searchValue: string): void {
    if (searchValue) {
      this.courses = this.courses.filter(course => {
        return course.title.toUpperCase().indexOf(searchValue.toUpperCase()) > -1;
      });
    } else {
      this.courses = this.coursesService.getCourses();
    }
  }

  deleteItem(course: CourseInterface): void {
    console.log('course item with id ' + course.id + ' is deleted');
  }

  showMore(): void {
    console.log('showMore button is clicked');
  }
}

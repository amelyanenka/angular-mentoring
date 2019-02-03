import { Component, OnInit } from '@angular/core';
import { CourseInterface } from '../../interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private courses: CourseInterface[] = [];
  private searchValue: string;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onChangedSearchValue(searchValue: string): void {
    this.searchValue = searchValue;
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

  onDelete(course: CourseInterface): void {
    const result: boolean = confirm('Do you really want to delete this course?');
    if (result) {
      this.coursesService.deleteCourse(course.id);
      this.courses = this.coursesService.getCourses();
      this.onSearch(this.searchValue);
    }
  }

  onShowMore(): void {
    console.log('showMore button is clicked');
  }
}

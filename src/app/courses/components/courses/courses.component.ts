import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInterface } from '../../../shared/interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses: CourseInterface[] = [];
  private currentPage = 0;
  public lastPage = false;
  private searchValue: string;

  constructor(private router: Router, private coursesService: CoursesService) {}

  public ngOnInit() {
    this.getCourses();
  }

  private getCourses(): void {
    this.coursesService.getCoursesWithParams(0).subscribe(courses => {
      this.courses = courses;
      this.coursesService.courses = this.courses;
    });
  }

  public onChangedSearchValue(searchValue: string): void {
    this.searchValue = searchValue;
  }

  public onSearch(): void {
    if (this.searchValue) {
      this.coursesService.getCoursesWithParams(0, this.searchValue).subscribe(courses => {
        this.courses = courses;
        this.coursesService.courses = this.courses;
      });
    } else {
      this.getCourses();
    }
  }

  public onDelete(course: CourseInterface): void {
    const result: boolean = confirm('Do you really want to delete this course?');
    if (result) {
      this.coursesService.deleteCourse(course.id).subscribe(() => {
        this.currentPage = 0;
        this.coursesService.getCoursesWithParams(this.currentPage).subscribe(courses => {
          this.courses = courses;
          this.coursesService.courses = this.courses;
          this.onSearch();
        });
      });
    }
  }

  public onShowMore(): void {
    this.coursesService.getCoursesWithParams(++this.currentPage * +this.coursesService.pagination, this.searchValue).subscribe(courses => {
      this.courses = this.courses.concat(courses);
      this.coursesService.courses = this.courses;
      this.lastPage = !courses.length;
    });
  }
}

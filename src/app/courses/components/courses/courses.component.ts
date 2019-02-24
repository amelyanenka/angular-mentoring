import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { CourseInterface } from '../../../shared/interfaces/course.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [SearchPipe]
})
export class CoursesComponent implements OnInit {
  public courses: CourseInterface[] = [];
  private currentPage = 0;
  public lastPage = false;
  private searchValue: string;

  constructor(private router: Router, private searchPipe: SearchPipe, private coursesService: CoursesService) { }

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

  public onSearch(searchValue: string): void {
    if (searchValue) {
      this.courses = this.searchPipe.transform(this.courses, searchValue);
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
          this.onSearch(this.searchValue);
        });
      });
    }
  }

  public onShowMore(): void {
    this.coursesService.getCoursesWithParams(++this.currentPage * this.coursesService.pagination).subscribe(courses => {
      this.courses = this.courses.concat(courses);
      this.coursesService.courses = this.courses;
      this.lastPage = !courses.length;
    });
  }
}

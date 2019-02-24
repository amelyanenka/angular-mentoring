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
  private searchValue: string;

  constructor(private router: Router, private searchPipe: SearchPipe, private coursesService: CoursesService) { }

  public ngOnInit() {
    this.getCourses();
  }

  private getCourses(): void {
    this.coursesService.getCourses().subscribe(courses => {
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
      this.coursesService.deleteCourse(course.id).subscribe(() =>
        this.coursesService.getCourses().subscribe(courses => {
          this.courses = courses;
          this.coursesService.courses = courses;
          this.onSearch(this.searchValue);
        })
      );
    }
  }

  public onShowMore(): void {
    // TODO: implement showing more courses
  }
}

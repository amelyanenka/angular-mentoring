import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInterface } from '../../../shared/interfaces/course.interface';
import { SearchPipe } from '../../../shared/pipes/search.pipe';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [SearchPipe]
})
export class CoursesComponent implements OnInit {
  public courses: CourseInterface[] = [];
  private searchValue: string;

  constructor(private router: Router, private searchPipe: SearchPipe, private coursesService: CoursesService,
              private authService: AuthService) { }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['auth']);
    } else {
      this.courses = this.coursesService.getCourses();
    }
  }

  onChangedSearchValue(searchValue: string): void {
    this.searchValue = searchValue;
  }

  onSearch(searchValue: string): void {
    if (searchValue) {
      this.courses = this.searchPipe.transform(this.courses, searchValue);
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

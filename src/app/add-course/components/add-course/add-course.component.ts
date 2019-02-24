import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseInterface } from '../../../shared/interfaces/course.interface';
import { Course } from '../../../shared/entities/course';
import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public course: CourseInterface;
  private exist = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {}

  public ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      if (data.id !== 'new') {
        this.course = this.coursesService.getCourseById(+data.id);
        this.exist = true;
      } else {
        this.coursesService.getAllCourses().subscribe(courses => {
          courses.sort((a, b) => a.id - b.id);
          const id = courses[courses.length - 1].id + 1;
          this.course = new Course(id, null, null, false, Date.now(), null, []);
        });
      }
    });
  }

  public onChangedDuration(duration: number): void {
    this.course.duration = duration;
  }

  public onSave(): void {
    if (this.exist) {
      this.coursesService.updateCourse(this.course).subscribe(() => this.router.navigate(['courses']));
    } else {
      this.coursesService.createCourse(this.course).subscribe(() => this.router.navigate(['courses']));
    }
  }

  public onCancel(): void {
    this.router.navigate(['courses']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  private id: number;
  public title: string;
  public description: string;
  public creation: number;
  public duration: number;
  private exist = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {}

  public ngOnInit() {
    this.creation = Date.now();
    this.activatedRoute.params.subscribe(data => {
      if (data.id !== 'new') {
        this.id = +data.id;
        const course = this.coursesService.getCourseById(this.id);
        this.title = course.title;
        this.description = course.description;
        this.creation = course.creation;
        this.duration = course.duration;
        this.exist = true;
      }
    });
  }

  public onChangedDuration(duration: number): void {
    this.duration = duration;
  }

  public onSave(): void {
    if (this.exist) {
      this.coursesService.updateCourse(this.id, this.title, this.description);
      this.router.navigate(['courses']);
    } else {
      this.coursesService.createCourse(this.title, this.description, false, this.creation, this.duration, []).subscribe(() =>
        this.coursesService.getCourses().subscribe(courses => {
          this.coursesService.courses = courses;
          this.router.navigate(['courses']);
        })
      );
    }
  }

  public onCancel(): void {
    this.router.navigate(['courses']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public id: number;
  public title: string;
  public description: string;
  public creation: number;
  public duration: number;
  public exist = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {}

  ngOnInit() {
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

  onChangedDuration(duration: number): void {
    this.duration = duration;
  }

  onSave() {
    if (this.exist) {
      this.coursesService.updateCourse(this.id, this.title, this.description);
    } else {
      this.coursesService.createCourse(this.title, this.creation, this.duration, this.description, false);
    }
    this.router.navigate(['courses']);
  }

  onCancel() {
    this.router.navigate(['courses']);
  }
}

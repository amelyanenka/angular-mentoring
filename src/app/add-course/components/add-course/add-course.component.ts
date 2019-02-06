import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../courses/services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public title: string;
  public description: string;
  public creation: number;
  public duration: number;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.creation = Date.now();
  }

  onChangedDuration(duration: number): void {
    this.duration = duration;
  }

  onSave() {
    this.coursesService.createCourse(this.title, this.creation, this.duration, this.description, false);
  }

  onCancel() {
    // TODO: redirect to courses page
  }
}

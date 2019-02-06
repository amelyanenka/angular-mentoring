import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  public creationDate: number;
  public duration: number;

  ngOnInit() {
    this.creationDate = Date.now();
  }

  onChangedDuration(duration: number): void {
    this.duration = duration;
  }
}

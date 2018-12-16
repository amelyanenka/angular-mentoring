import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../../entities/course';
import { CourseInterface } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() public course: Course;
  @Output() public delete: EventEmitter<CourseInterface> = new EventEmitter<CourseInterface>();

  constructor() { }

  ngOnInit() {
  }

  openItem(course: CourseInterface): void {
    console.log('course item with id ' + course.id + ' is opened');
  }

  deleteItem(event): void {
    event.stopPropagation();
    this.delete.emit(this.course);
  }
}

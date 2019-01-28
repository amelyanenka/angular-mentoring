import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseInterface } from '../../interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() public course: CourseInterface;
  @Output() public delete: EventEmitter<CourseInterface> = new EventEmitter<CourseInterface>();

  openItem(course: CourseInterface): void {
    console.log('course item with id ' + course.id + ' is opened');
  }

  deleteItem(event): void {
    event.stopPropagation();
    this.delete.emit(this.course);
  }
}

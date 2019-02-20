import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInterface } from '../../../shared/interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input() public course: CourseInterface;
  @Output() public delete: EventEmitter<CourseInterface> = new EventEmitter<CourseInterface>();

  constructor(private router: Router) {}

  public onEdit(course: CourseInterface): void {
    this.router.navigate(['courses', course.id]);
  }

  public onDelete(event): void {
    event.stopPropagation();
    this.delete.emit(this.course);
  }
}

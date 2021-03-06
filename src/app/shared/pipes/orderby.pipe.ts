import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../interfaces/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(courses: CourseInterface[], orderBy: string) {
    return orderBy ? courses.sort((a, b) => b[orderBy] - a[orderBy]) : courses;
  }
}

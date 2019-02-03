import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../interfaces/course.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(courses: CourseInterface[], orderBy: string) {
    if (!orderBy) {
      return courses;
    }

    return courses.sort((a, b) => a[orderBy] - b[orderBy]);
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { CourseInterface } from '../interfaces/course.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(courses: CourseInterface[], searchValue: string): any {
    return searchValue ? courses.filter(course => course.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) : courses;
  }
}

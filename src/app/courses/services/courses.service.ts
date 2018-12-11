import { Injectable } from '@angular/core';
import { CourseInterface } from '../interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  public getCourses(): CourseInterface[] {
    return [
      {
        id: 1,
        title: 'Course-1',
        creation: 'Created-1',
        duration: 'Duration-1',
        description: 'Description-1'
      },
      {
        id: 2,
        title: 'Course-2',
        creation: 'Created-2',
        duration: 'Duration-2',
        description: 'Description-2'
      },
      {
        id: 3,
        title: 'Course-3',
        creation: 'Created-3',
        duration: 'Duration-3',
        description: 'Description-3'
      }
    ];
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseInterface } from '../../shared/interfaces/course.interface';
import { Course } from '../../shared/entities/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: CourseInterface[];

  constructor(private http: HttpClient) {}

  public getCourses(): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>('http://localhost:3004/courses');
  }

  public createCourse(title: string, description: string, topRated: boolean, creation: number, duration: number, authors: object[] = []) {
    this.courses = this.courses.sort((a, b) => a.id - b.id);
    const course: CourseInterface = new Course(this.courses[this.courses.length - 1].id + 1, title, description, topRated, creation,
      duration, authors);
    this.courses.push(course);
  }

  public getCourseById(id: number) {
    return this.courses.find(course => course.id === id);
  }

  public updateCourse(id: number, title: string, description: string) {
    const course: CourseInterface = this.getCourseById(id);
    course.title = title;
    course.description = description;
  }

  public deleteCourse(id: number): void {
    const index: number = this.courses.findIndex(course => course.id === id);
    this.courses.splice(index, 1);
  }
}

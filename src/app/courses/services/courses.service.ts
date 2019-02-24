import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseInterface } from '../../shared/interfaces/course.interface';
import { AuthorInterface } from '../../shared/interfaces/author.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: CourseInterface[];
  private URL = 'http://localhost:3004/courses';

  constructor(private http: HttpClient) {}

  public getCourses(): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>(this.URL);
  }

  public createCourse(title: string, description: string, topRated: boolean, creation: number, duration: number,
                      authors: AuthorInterface[] = []): Observable<CourseInterface[]> {
    this.courses = this.courses.sort((a, b) => a.id - b.id);
    const id = this.courses[this.courses.length - 1].id + 1;
    return this.http.post<CourseInterface[]>(this.URL, {id, title, description, topRated, creation, duration, authors});
  }

  public getCourseById(id: number): CourseInterface {
    return this.courses.find(course => course.id === id);
  }

  public updateCourse(id: number, title: string, description: string): void {
    const course: CourseInterface = this.getCourseById(id);
    course.title = title;
    course.description = description;
  }

  public deleteCourse(id: number): Observable<CourseInterface[]> {
    return this.http.delete<CourseInterface>(`${this.URL}/${id}`);
  }
}

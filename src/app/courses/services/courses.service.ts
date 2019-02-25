import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseInterface } from '../../shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: CourseInterface[];
  public pagination = '10';
  private URL = 'http://localhost:3004/courses';

  constructor(private http: HttpClient) {}

  public getAllCourses(): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>(this.URL);
  }

  public getCoursesWithParams(start: number, textFragment: string = ''): Observable<CourseInterface[]> {
    return this.http.get<CourseInterface[]>(this.URL, {params: {start: `${start}`, count: this.pagination, textFragment: textFragment}});
  }

  public createCourse(course: CourseInterface): Observable<CourseInterface> {
    return this.http.post<CourseInterface>(this.URL, course);
  }

  public getCourseById(id: number): CourseInterface {
    return this.courses.find(course => course.id === id);
  }

  public updateCourse(course: CourseInterface): Observable<CourseInterface> {
    return this.http.put<CourseInterface>(`${this.URL}/${course.id}`, course);
  }

  public deleteCourse(id: number): Observable<CourseInterface> {
    return this.http.delete<CourseInterface>(`${this.URL}/${id}`);
  }
}

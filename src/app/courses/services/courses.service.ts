import { Injectable } from '@angular/core';
import { Course } from '../../shared/entities/course';
import { CourseInterface } from '../../shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: CourseInterface[] = [
    {
      id: 1,
      title: 'IT Security Foundations: Core Concepts',
      creation: 1548693343651,
      duration: 105,
      description: 'Prepare for MTA Exam 98-367. Learn the core concepts of operating system and network-level security to avoid ' +
      'threats and eliminate system vulnerabilities.',
      topRated: false
    },
    {
      id: 2,
      title: 'Online Marketing Foundations',
      creation: 1547491002266,
      duration: 84,
      description: 'Learn today\'s online marketing techniques and find out how how to build a successful online marketing campaign' +
      'for all digital channels: search, video, social, email, and display.',
      topRated: true
    },
    {
      id: 3,
      title: 'Google Analytics Essential Training',
      creation: 1558720649402,
      duration: 49,
      description: 'Learn how to use Google Analytics to find out how your website is performing. Discover how to use this powerful ' +
      'platform to measure site traffic, ad performance, and social media activity.',
      topRated: false
    },
    {
      id: 4,
      title: 'Programming Foundations: Real-World Examples',
      creation: 1548700064324,
      duration: 72,
      description: 'Learn how to connect programming theory to practice. This series of training videos explains basic programming ' +
      'concepts such as functions, variables, and loops by comparing them to real-life scenarios.',
      topRated: false
    },
    {
      id: 5,
      title: 'Learning Git and GitHub',
      creation: 1549720649402,
      duration: 54,
      description: 'Learn to work with the most common Git commands, and use GitHub to clone, explore, and create templates from ' +
      'existing projects.',
      topRated: true
    }
  ];

  public getCourses(): CourseInterface[] {
    return this.courses;
  }

  public createCourse(title: string, creation: number, duration: number, description: string, topRated: boolean) {
    this.courses = this.courses.sort((a, b) => a.id - b.id);
    const course = new Course(this.courses[this.courses.length - 1].id + 1, title, creation, duration, description, topRated);
    this.courses.push(course);
  }

  public getCourseById(id: number) {
    return this.courses.find(course => course.id === id);
  }

  public updateCourse(id: number, title: string, description: string) {
    const course = this.getCourseById(id);
    course.title = title;
    course.description = description;
  }

  public deleteCourse(id: number): void {
    const index = this.courses.findIndex(item => item.id === id);
    this.courses.splice(index, 1);
  }
}

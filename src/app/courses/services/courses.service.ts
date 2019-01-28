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
        title: 'IT Security Foundations: Core Concepts',
        creation: 1548693343651,
        duration: '1h 45min',
        description: 'Prepare for MTA Exam 98-367. Learn the core concepts of operating system and network-level security to avoid ' +
        'threats and eliminate system vulnerabilities.'
      },
      {
        id: 2,
        title: 'Online Marketing Foundations',
        creation: 1547491002266,
        duration: '1h 24min',
        description: 'Learn today\'s online marketing techniques and find out how how to build a successful online marketing campaign' +
        'for all digital channels: search, video, social, email, and display.'
      },
      {
        id: 3,
        title: 'Google Analytics Essential Training',
        creation: 1548720649402,
        duration: '49min',
        description: 'Learn how to use Google Analytics to find out how your website is performing. Discover how to use this powerful ' +
        'platform to measure site traffic, ad performance, and social media activity.'
      },
      {
        id: 4,
        title: 'Programming Foundations: Real-World Examples',
        creation: 1548700064324,
        duration: '1h 12min',
        description: 'Learn how to connect programming theory to practice. This series of training videos explains basic programming ' +
        'concepts such as functions, variables, and loops by comparing them to real-life scenarios.'
      },
      {
        id: 5,
        title: 'Learning Git and GitHub',
        creation: 15491326332744,
        duration: '54min',
        description: 'Learn to work with the most common Git commands, and use GitHub to clone, explore, and create templates from ' +
        'existing projects.'
      }
    ];
  }
}

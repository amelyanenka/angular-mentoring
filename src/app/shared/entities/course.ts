import { CourseInterface } from '../interfaces/course.interface';

export class Course implements CourseInterface {
  id: number;
  title: string;
  creation: number;
  duration: number;
  description: string;
  topRated: boolean;

  constructor (id: number, title: string, creation: number, duration: number, description: string, topRated: boolean) {
    this.id = id;
    this.title = title;
    this.creation = creation;
    this.duration = duration;
    this.description = description;
    this.topRated = topRated;
  }
}

import { CourseInterface } from '../interfaces/course.interface';

export class Course implements CourseInterface {
  id: number;
  title: string;
  creation: number;
  duration: number;
  description: string;
  topRated: boolean;

  constructor (_id: number, _title: string, _creation: number, _duration: number, _description: string, _topRated: boolean) {
    this.id = _id;
    this.title = _title;
    this.creation = _creation;
    this.duration = _duration;
    this.description = _description;
    this.topRated = _topRated;
  }
}

import { CourseInterface } from '../interfaces/course.interface';

export class Course implements CourseInterface {
  id: number;
  title: string;
  creation: string;
  duration: string;
  description: string;

  constructor (_id: number, _title: string, _creation: string, _duration: string, _description: string) {
    this.id = _id;
    this.title = _title;
    this.creation = _creation;
    this.duration = _duration;
    this.description = _description;
  }
}

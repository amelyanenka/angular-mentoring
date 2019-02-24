import { CourseInterface } from '../interfaces/course.interface';
import { AuthorInterface } from '../interfaces/author.interface';

export class Course implements CourseInterface {
  id: number;
  title: string;
  description: string;
  topRated: boolean;
  creation: number;
  duration: number;
  authors: AuthorInterface[];

  constructor (id: number, title: string, description: string, topRated: boolean, creation: number, duration: number,
               authors: AuthorInterface[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.topRated = topRated;
    this.creation = creation;
    this.duration = duration;
    this.authors = authors;
  }
}

export interface CourseInterface {
  id: number;
  title: string;
  description: string;
  topRated: boolean;
  creation: number;
  duration: number;
  authors: object[];
}

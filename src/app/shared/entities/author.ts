import { AuthorInterface } from '../interfaces/author.interface';
import { NameInterface } from '../interfaces/name.interface';

export class Author implements AuthorInterface {
  id: number;
  name: NameInterface;

  constructor (id: number, name: NameInterface) {
    this.id = id;
    this.name = name;
  }
}

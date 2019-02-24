import { NameInterface } from '../interfaces/name.interface';

export class Name implements NameInterface {
  first: string;
  last: string;

  constructor (first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

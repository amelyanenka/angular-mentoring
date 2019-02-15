import { UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  id: number;
  name: string;
  pass: string;

  constructor (id: number, name: string, pass: string) {
    this.id = id;
    this.name = name;
    this.pass = pass;
  }
}

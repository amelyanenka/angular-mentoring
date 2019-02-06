import { UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  id: number;
  firstName: string;
  lastName: string;

  constructor (id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

import { UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  private id: number;
  private firstName: string;
  private lastName: string;

  constructor (id: number, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

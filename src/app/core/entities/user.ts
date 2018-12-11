import { UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  id: number;
  firstName: string;
  lastName: string;

  constructor (_id: number, _firstName: string, _lastName: string) {
    this.id = _id;
    this.firstName = _firstName;
    this.lastName = _lastName;
  }
}

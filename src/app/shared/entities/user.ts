import { UserInterface } from '../interfaces/user.interface';

export class User implements UserInterface {
  id: number;
  token: string;
  name: object;
  login: string;
  password: string;

  constructor (id: number, token: string, name: object, login: string, password: string) {
    this.id = id;
    this.token = token;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

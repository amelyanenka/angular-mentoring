import { UserInterface } from '../interfaces/user.interface';
import { NameInterface } from '../interfaces/name.interface';

export class User implements UserInterface {
  id: number;
  token: string;
  name: NameInterface;
  login: string;
  password: string;

  constructor (id: number, token: string, name: NameInterface, login: string, password: string) {
    this.id = id;
    this.token = token;
    this.name = name;
    this.login = login;
    this.password = password;
  }
}

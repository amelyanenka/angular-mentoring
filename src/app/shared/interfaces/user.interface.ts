import { NameInterface } from './name.interface';

export interface UserInterface {
  id: number;
  token: string;
  name: NameInterface;
  login: string;
  password: string;
}

export interface UserInterface {
  id: number;
  firstName: string;
  lastName: string;

  getFullName(): string;
}

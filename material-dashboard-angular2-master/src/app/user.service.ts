import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: any[] = [];

  addUser(email: string, password: string) {
    const user = { email, password };
    this.users.push(user);
  }

  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}
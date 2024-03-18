import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [{ name: 'Anson', email: 'anson@gmail.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return;
  }
  fetchUserById(id: number) {
    return { id, name: 'scott', email: 'sado@gmail.com' };
  }
}

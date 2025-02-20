import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Orchlon',
      email: 'orchllnz@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Erica',
      email: 'erc@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Oscar',
      email: 'oscarrr.as@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Mile',
      email: 'mile.gao@gmail.com',
      role: 'INTERN',
    },
    {
      id: 1,
      name: 'June',
      email: 'junae@gmail.com',
      role: 'ADMIN ',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.filter((user) => user.id === id);
    return user;
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => (a.id = b.id));
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}

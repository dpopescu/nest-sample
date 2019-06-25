import {Injectable} from '@nestjs/common';
import {User} from '@nest-sample/data';

@Injectable()
export class UsersService {
  public async findOneByToken(token: string): Promise<User> {
    return Promise.resolve({
      id: 'abcdefgh',
      email: 'john@doe.com',
      firstName: 'John',
      lastName: 'Doe'
    });
  }
}

import {Injectable} from '@nestjs/common';
import {UsersService} from '../../../users/service/users/users.service';
import {User} from '@nest-sample/data';
import {JwtService} from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService) {
  }

  public async signIn(): Promise<string> {
    const user: User = {
      id: 'abcdefgh',
      email: 'john@doe.com',
      firstName: 'John',
      lastName: 'Doe'
    };

    return this.jwtService.sign(user);
  }

  public async validateUser(user: User): Promise<User> {
    return await this.usersService.findOneByEmail(user.email);
  }

}

import {Injectable} from '@nestjs/common';
import {UsersService} from '../../../users/service/users/users.service';
import {User} from '@nest-sample/data';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {
  }

  public async validateUser(token: string): Promise<User> {
    return await this.usersService.findOneByToken(token);
  }

}

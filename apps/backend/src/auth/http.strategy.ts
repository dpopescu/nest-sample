import {PassportStrategy} from '@nestjs/passport';
import {Strategy} from 'passport-http-bearer';
import {AuthService} from './service/auth/auth.service';
import {User} from '@nest-sample/data';
import {Injectable, UnauthorizedException} from '@nestjs/common';

@Injectable()
export class HttpStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  public async validate(token: string) {
    const user: User = await this.authService.validateUser(token);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}

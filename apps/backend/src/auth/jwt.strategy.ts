import {PassportStrategy} from '@nestjs/passport';
import {ExtractJwt, Strategy} from 'passport-jwt';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from './service/auth/auth.service';
import {User} from '@nest-sample/data';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey'
    })
  }

  async validate(payload: User) {
    const user: User = await this.authService.validateUser(payload);

    if (!user) {
      throw new UnauthorizedException()
    }

    return user;
  }
}

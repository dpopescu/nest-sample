import {Controller, Get, Req, UseGuards} from '@nestjs/common';

import {AppService} from './service/app.service';
import {AuthGuard} from '@nestjs/passport';
import {ServerResponse, User} from '@nest-sample/data';
import {AuthService} from '../auth/service/auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) {
  }

  @Get()
  @UseGuards(AuthGuard())
  getData(): ServerResponse {
    return this.appService.getData();
  }

  @Get('/user')
  @UseGuards(AuthGuard())
  getUser(@Req() req): User {
    return req.user;
  }

  @Get('/signIn')
  getToken() {
    return this.authService.signIn();
  }
}

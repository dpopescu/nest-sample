import {Controller, Get, UseGuards} from '@nestjs/common';

import { AppService } from './service/app.service';
import {AuthGuard} from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('bearer'))
  getData() {
    return this.appService.getData();
  }
}

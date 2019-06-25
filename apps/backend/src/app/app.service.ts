import {Injectable} from '@nestjs/common';
import {ServerResponse} from '@nest-sample/data';

@Injectable()
export class AppService {
  getData(): { message: ServerResponse } {
    return ({message: 'Hello from backend!'});
  }
}

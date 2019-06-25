import {Injectable} from '@nestjs/common';
import {ServerResponse} from '@nest-sample/data';

@Injectable()
export class AppService {
  getData(): ServerResponse {
    return {message: 'Hello from backend!'};
  }
}

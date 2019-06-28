import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AppServiceService} from './service/app-service.service';
import {ServerResponse, User} from '@nest-sample/data';

@Component({
  selector: 'nest-sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  messageFromServer: Observable<ServerResponse>;
  user: Observable<User>;

  constructor(private appService: AppServiceService) {
    this.messageFromServer = appService.getMessageFromServer();
    this.user = appService.getUser();
  }
}

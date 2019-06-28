import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ServerResponse, User} from '@nest-sample/data';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) {
  }

  public getMessageFromServer(): Observable<ServerResponse> {
    return <Observable<ServerResponse>>this.http.get('/api');
  }

  public getUser(): Observable<User> {
    return <Observable<User>>this.http.get('/api/user');
  }
}

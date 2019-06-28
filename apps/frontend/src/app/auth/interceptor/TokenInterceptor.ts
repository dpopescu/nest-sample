import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiY2RlZmdoIiwiZW1haWwiOiJqb2huQGRvZS5jb20iLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJpYXQiOjE1NjE3MzIwNjEsImV4cCI6MTU2MTczNTY2MX0.KTUJXmUhLadyu6pJApaHlEYFuMVibfRDP-87-04EcO0'
      }
    });

    return next.handle(req);
  }
}

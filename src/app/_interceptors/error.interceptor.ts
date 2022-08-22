import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatSnackBarComponent } from '../components/mat-snack-bar/mat-snack-bar.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _snackbar: MatSnackBarComponent) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
       tap(event => {
         if (event instanceof HttpResponse) {
            if (event?.body['error']) {
                this._snackbar.openSnackBar(event.body.error);
            }
         }
       })
     )
  }
}

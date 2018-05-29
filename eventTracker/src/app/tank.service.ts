import { Injectable } from '@angular/core';
import { Tank } from './models/tank';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TankService {
  private url = 'http://localhost:8080/api/events';

  index() {
    return this.http.get<Tank[]>(this.url)
        .pipe(
            catchError((err: any) => {
              console.log(err);
              return throwError('KABOOM');
            })
        );
  }

  create(todo: Tank) {
    return this.http.post<Tank>(this.url, todo)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  update(todo) {
    return this.http.put<Tank>(this.url + '/' + todo.id, todo)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM');
          })
        );
  }

  destroy(id) {
    return this.http.delete(this.url + '/' + id)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM');
          })
        );
  }


  constructor(
    private http: HttpClient
  ) { }
}

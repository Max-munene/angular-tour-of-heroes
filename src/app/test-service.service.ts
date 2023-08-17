import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { dataList } from './dataList';
import { Observable, catchError, retry } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  private url: string = '/assets/data.json';

  getTestDetails(): Observable<dataList[]> {
    return this.http
      .get<dataList[]>(this.url)
      .pipe(retry(3), catchError(this.errorHandler));
  }
  public errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An Error has Occured', error.error);
    } else {
      console.error(`Backend returns ${error.status}`, error.error);
    }

    return throwError(
      () => new Error('Something bad happened, please try again later')
    );
  }
  constructor(private http: HttpClient) {}
}

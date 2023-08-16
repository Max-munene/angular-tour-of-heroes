import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataList } from './dataList';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  private url: string = '/assets/data.json';
  getTestDetails(): Observable<dataList> {
    return this.http.get<dataList>(this.url);
  }
  constructor(private http: HttpClient) {}
}

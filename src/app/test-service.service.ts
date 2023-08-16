import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestServiceService {
  getTestDetails() {
    return [
      { id: 1, name: 'Ken Wamaitha', age: 38 },
      { id: 2, name: 'Kevin Kimanzi', age: 20 },
      { id: 3, name: 'Lucy Wanjira', age: 34 },
    ];
  }
  constructor() {}
}

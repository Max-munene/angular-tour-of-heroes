import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  template: `<app-child-component
    [childMessage]="parentMessage"
    ]
  ></app-child-component>`,
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent {
  parentMessage = 'Hellooo family';
  constructor() {}
}

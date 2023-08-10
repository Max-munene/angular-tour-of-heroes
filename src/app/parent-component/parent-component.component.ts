import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  template: `<h1>{{ message }}</h1>
    <app-child-component
      (messageEvent)="message = $event"
      [childMessage]="parentMessage"
    ></app-child-component>`,
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent {
  parentMessage = 'Hellooo family';
  constructor() {}
  message = '';
}

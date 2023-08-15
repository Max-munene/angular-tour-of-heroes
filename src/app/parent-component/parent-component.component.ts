// Import necessary Angular module
import { Component } from '@angular/core';

@Component({
  // Component metadata: selector, template, and styles
  selector: 'app-parent-component', // Selector to use this component in templates
  template: `<h1>{{ message }}</h1>
    <!-- Embedding the child component with inputs and outputs -->
    <app-child-component
      (messageEvent)="message = $event"
      [childMessage]="parentMessage"
    ></app-child-component>`,
  styleUrls: ['./parent-component.component.css'], // Component's style file
})
export class ParentComponentComponent {
  parentMessage = 'Hellooo family'; // Property to be passed to child component
  constructor() {} // Constructor for the component, runs when the component is created
  message = ''; // Property to store the message received from the child component
}

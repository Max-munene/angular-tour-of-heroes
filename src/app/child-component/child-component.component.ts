// Import necessary Angular modules and decorators
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // Component metadata: selector, template, and styles
  selector: 'app-child-component', // Selector to use this component in templates
  template: `Say {{ childMessage }}
    <button (click)="sendMessage()">Say Hi</button>`, // Component template with data binding
  styleUrls: ['./child-component.component.css'], // Component's style file
})
export class ChildComponentComponent {
  @Input() childMessage?: string; // Input property to receive data from parent component
  constructor() {} // Constructor for the component, runs when the component is created

  @Output() messageEvent = new EventEmitter<string>(); // Output property for sending data to parent component

  // Method to send a message to the parent component
  sendMessage() {
    this.messageEvent.emit('Hello August!'); // Emitting the event with a message
  }
}

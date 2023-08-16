// Import necessary Angular modules and decorators
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  // Component metadata: selector, template, and styles
  selector: 'app-child-component', // Selector to use this component in templates
  template: `Say {{ childMessage }},
    <ul *ngFor="let test of testdata">
      <li>{{ test.name }}, {{ test.age }}, {{ test.id }}</li>
    </ul>

    <button (click)="sendMessage()">Say Hi</button>`, // Component template with data binding
  styleUrls: ['./child-component.component.css'], // Component's style file
})
export class ChildComponentComponent implements OnInit {
  @Input() childMessage?: string; // Input property to receive data from parent component
  testdata: any;
  constructor(private testService: TestServiceService) {} // Constructor for the component, runs when the component is created

  @Output() messageEvent = new EventEmitter<string>(); // Output property for sending data to parent component

  // Method to send a message to the parent component
  sendMessage() {
    this.messageEvent.emit('Hello August!'); // Emitting the event with a message
  }
  ngOnInit() {
    this.testdata = this.testService.getTestDetails();
    console.log(this.testdata);
  }
}

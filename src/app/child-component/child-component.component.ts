// Import necessary Angular modules and decorators
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { throwError } from 'rxjs';

@Component({
  // Component metadata: selector, template, and styles
  selector: 'app-child-component', // Selector to use this component in templates
  templateUrl: './child-component.component.html',
  // Component template with data binding
  styleUrls: ['./child-component.component.css'], // Component's style file
})
export class ChildComponentComponent implements OnInit {
  @Input() childMessage?: string; // Input property to receive data from parent component
  testdata: any;
  errormsg: any;

  constructor(private testService: TestServiceService) {} // Constructor for the component, runs when the component is created

  @Output() messageEvent = new EventEmitter<string>(); // Output property for sending data to parent component

  // Method to send a message to the parent component
  sendMessage() {
    this.messageEvent.emit('Hello August!'); // Emitting the event with a message
  }
  ngOnInit() {
    this.testService
      .getTestDetails()
      .subscribe((data) => (this.testdata = data));
    this.errormsg = Error;
    console.log(this.testdata);
  }
}

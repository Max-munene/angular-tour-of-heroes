import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `Say {{ childMessage }}
    <button (click)="sendMessage()">Say Hi</button>`,
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  @Input() childMessage!: string;
  constructor() {}
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello August!');
  }
}

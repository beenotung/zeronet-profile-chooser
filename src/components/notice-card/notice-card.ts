import {Component, Input} from '@angular/core';

@Component({
  selector: 'notice-card',
  templateUrl: 'notice-card.html'
})
export class NoticeCardComponent {

  @Input()
  text: string;

  @Input()
  code = false;
  @Input()
  pre = false;

  @Input()
  center = true;

  constructor() {
    console.log('Hello NoticeCardComponent Component');
    this.text = 'Hello World';
  }

}

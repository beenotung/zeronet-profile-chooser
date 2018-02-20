import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class DebugProvider {
  text: string = '';
  readonly textSubject = new Subject<string>();

  constructor() {
    console.log('Hello DebugProvider Provider');
  }

  setText(s: string) {
    this.text = s;
    this.onchange();
  }

  clear() {
    this.setText('')
  }

  addLine(s: string) {
    this.text += '\n' + s;
    this.onchange();
  }

  private onchange() {
    this.textSubject.next(this.text);
  }

}

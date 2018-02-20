import {Injectable} from '@angular/core';
import {Platform} from "ionic-angular";

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  constructor(public platform: Platform) {
    console.log('Hello CommonProvider Provider');
  }

  isCordova() {
    return this.platform.is('cordova')
  }
}

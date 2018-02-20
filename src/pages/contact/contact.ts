import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Contacts} from "../../model/contact";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit, OnChanges {

  hasNetwork = false;
  contacts = Contacts;
  homepage = 'https://beeno-tung.surge.sh';

  constructor(public navCtrl: NavController) {
    // this.homepage = 'http://192.168.42.96:8100'
  }

  ngOnInit(): void {
    this.checkNetwork()
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkNetwork()
  }

  private checkNetwork() {
    console.log('check network');
    fetch(this.homepage)
      .then(_ => this.hasNetwork = true)
      .catch(_ => this.hasNetwork = false)
  }

}

import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Profile} from "../../models/profile";
import {Profiles} from "../../providers/profiles/profiles";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  profiles: Profile[] = [];
  hasProfile = 'Checking ZeroNet directory';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public profileCtrl: Profiles) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.profileCtrl.all().then(x => this.profiles = x);
    this.profileCtrl.hasProfile().then(x => this.hasProfile = x ? 'ZeroNet is installed' : 'ZeroNet is not installed?')
  }

}

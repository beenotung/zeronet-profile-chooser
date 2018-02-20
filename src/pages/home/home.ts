import {Component, OnInit} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {Profile} from "../../model/profile";
import {ProfileProvider} from "../../providers/profile/profile";
import {CommonProvider} from "../../providers/common/common";
import {DebugProvider} from "../../providers/debug/debug";
import {inspect} from 'util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  isCordova = false;
  status: string = 'Checking ZeroNet directory';
  debugText: string = '';

  profiles: Profile[] = [];

  constructor(public navCtrl: NavController
    , public common: CommonProvider
    , public debug: DebugProvider
    , public alertCtrl: AlertController
    , public profileCtrl: ProfileProvider) {
    this.isCordova = common.isCordova();
  }

  ngOnInit(): void {
    this.debugText = this.debug.text;
    this.debug.textSubject.subscribe(x => this.debugText = x);
    if (this.isCordova) {
      this.profileCtrl.hasProfile().then(x => this.status = x
        ? 'ZeroNet is detected'
        : 'ZeroNet is not installed?');
      this.profileCtrl.all().then(xs => this.profiles = xs);
    } else {
      this.isCordova = true;
      this.status = 'mock from non-cordova device';
      this.profiles = [
        {username: 'user1', isActive: true, filename: 'f1', path: 'p1'}
        , {username: 'user2', isActive: false, filename: 'f2', path: 'p2'}
      ];
    }
  }

  async selectProfile(profile: Profile) {
    if (profile.isActive) {
      return this.alertCtrl.create({
        title: `profile ${profile.username} is already selected.`
      }).present();
    }
    console.log('TODO');
    this.debug.addLine('TODO');
    let msg: string;
    try {
      await this.profileCtrl.select(profile);
      msg = 'Selected profile of `' + profile.username + '`'
    } catch (e) {
      console.error(e);
      this.debug.addLine('failed to select profile:' + inspect(e));
      msg = 'Failed to select profile';
    }
    return this.alertCtrl.create({
      message: msg
      , buttons: ['ok']
    }).present();
  }

}

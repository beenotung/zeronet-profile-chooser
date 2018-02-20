import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Profile} from "../../model/profile";
import {ProfileProvider} from "../../providers/profile/profile";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  profiles: Profile[] = [];
  hasProfile = 'Checking ZeroNet directory';

  constructor(public navCtrl: NavController,
              public profileCtrl: ProfileProvider
  ) {
  }

  ngOnInit(): void {
    this.profileCtrl.all().then(x => this.profiles = x);
    this.profileCtrl.hasProfile().then(x => this.hasProfile = x ? 'ZeroNet is installed' : 'ZeroNet is not installed?')
  }

}

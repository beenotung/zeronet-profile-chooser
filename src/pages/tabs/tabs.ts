import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {Tab1Root, Tab2Root, Tab3Root} from "../pages";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = Tab1Root;
  tab2Root = Tab2Root;
  tab3Root = Tab3Root;


  constructor(public navCtrl: NavController) {
  }
}

import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {ProfileProvider} from '../providers/profile/profile';
import {File} from "@ionic-native/file";
import {IonicStorageModule} from "@ionic/storage";
import {NoticeCardComponent} from "../components/notice-card/notice-card";
import { CommonProvider } from '../providers/common/common';
import { DebugProvider } from '../providers/debug/debug';
import {AndroidPermissions} from "@ionic-native/android-permissions";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    NoticeCardComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileProvider,
    CommonProvider,
    DebugProvider,
    AndroidPermissions
  ]
})
export class AppModule {
}

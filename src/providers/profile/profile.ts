import {Injectable} from '@angular/core';
import {File} from "@ionic-native/file";
import {profileRoot} from "../../config";
import {Profile} from "../../model/profile";
import {inspect} from "util";
import {CommonProvider} from "../common/common";
import {DebugProvider} from "../debug/debug";

const ProfileFilename = 'users.json';

@Injectable()
export class ProfileProvider {

  constructor(public file: File
    , public debug: DebugProvider
    , public common: CommonProvider) {
    console.log('Hello ProfileProvider Provider');
    (window as any)['file'] = file;
  }

  async hasProfile() {
    if (!this.common.isCordova()) {
      alert('not cordova platform!');
      return false;
    }
    return this.file.checkFile("file:///" + profileRoot, ProfileFilename)
      .then(_ => true)
      .catch(e => {
        if (e.code == 1 && e.message == "NOT_FOUND_ERR") {
          return false;
        }
        console.error('checkFile error:', e);
        alert('checkFile error:' + inspect(e));
        return false
      })
  }

  async getUsername(path: string, file: string): Promise<string> {
    const s = await this.file.readAsText(path, file);
    const o = JSON.parse(s);
    const hs = Object.keys(o);
    if (hs.length !== 1) {
      console.error('invalid users.json, name:' + file);
      this.debug.addLine('invalid users.json, name:' + file);
      throw new Error("invalid users.json file: " + path + " " + file);
    }
    return o[hs[0]].certs['zeroid.bit'].auth_user_name;
  }

  async all(): Promise<Profile[]> {
    if (!this.common.isCordova()) {
      alert('not cordova platform!');
      return [];
    }
    const ss = profileRoot.split('/');
    ss.pop();
    const folderName = ss.pop();
    const path = "file:///" + ss.join('/') + '/';
    const list = await this.file.listDir(path, folderName);
    const res = list
      .filter(x => x.isFile)
      .filter(x => x.name != ProfileFilename)
      .filter(x => x.name.startsWith(ProfileFilename))
    ;
    const currentUser = await this.getUsername(path + folderName + '/', ProfileFilename);
    return Promise.all(res.map(file => {
      // return this.file.readAsText(path + folderName + '/', file.name)
      return this.getUsername(path + folderName + '/', file.name)
        .then(username => {
          this.debug.addLine(inspect({username}));
          return {
            username
            , filename: file.name
            , path: path + folderName + '/'
            , isActive: username == currentUser
          };
        })
    })).then(xs => xs.filter(x => x));
  }

  async select(profile: Profile) {
    if (!this.common.isCordova()) {
      alert('mock select profile: ' + profile.username);
      return;
    }
    return this.file.copyFile(profile.path, profile.filename
      , "file:///" + profileRoot, ProfileFilename)
  }
}

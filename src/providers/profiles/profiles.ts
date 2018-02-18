import {Injectable} from '@angular/core';
import {File} from "@ionic-native/file";
import {profileRoot} from "../../config";
import * as utils from 'util';
import {Profile} from "../../models/profile";

const profileFilename = 'users.json';

@Injectable()
export class Profiles {

  constructor(public file: File) {
    console.log('Hello ProfileProvider Provider');
  }

  async hasProfile() {
    if('de'){return true}
    return this.file.checkFile(profileRoot, profileFilename)
      .then(_ => true)
      .catch(e => {
        console.error('checkFile error:', e);
        if (e.toString() === 'cordova_not_available') {
          console.log(utils.inspect({'cordova':window['cordova']}));
          return new Promise((resolve, reject) =>
            setTimeout(() =>
                this.hasProfile()
                  .then(resolve)
                  .catch(reject)
              , 1000));
        }
        alert('checkFile error:' + utils.inspect(e));
        return false
      })
  }

  async all(): Promise<Profile[]> {
    let ss = profileRoot.split('/');
    let filename = ss.pop();
    let path = ss.join('/');
    let res = (await this.file.listDir(path, filename))
      .filter(x => x.isFile)
      .filter(x => x.name.startsWith(profileFilename))
    ;
    return Promise.all(res.map(x => {
      return this.file.readAsText(path, x.name)
        .then(x => JSON.stringify(x))
        .then(o => {
          let hs = Object.keys(o);
          if (hs.length != 1) {
            console.log('invalid users.json, name:' + x.name);
            throw new Error("invalid users.json");
          }
          let username = o[hs[0]].certs['zeroid.bit'].auth_user_name;
          return {
            username
            , filename: x.name
            , path
          };
        })
    }));
  }

}

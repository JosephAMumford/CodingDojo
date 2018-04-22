import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  //userInfo = [];
  score: number;

  constructor(private _http: HttpClient) { }

  getUserInfo(username) {
    let url: string = 'https://api.github.com/users/' + username;
    this._http.get(url).subscribe(
      (info) => {
        //console.log(info);
        let x: number = info.public_repos;
        x += info.followers;
        this.score = x;
        //console.log(x);
        //console.log(this.score);
        //this.userInfo.push(info);
      }
    );

    //console.log(this.userInfo);
  }
}

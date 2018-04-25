import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  data : any = {
    name: " ",
    main: {
      humidity: 0,
      temp: 0,
      temp_max: 0,
      temo_min: 0
    },
    weather: [
      {
        description: ""
      }
    ]
  };


  constructor(private _route: ActivatedRoute, private _http: HttpClient) {
    this._route.paramMap.subscribe( params => {
      this.getInfo(params.get("id"));
    })
  }

  ngOnInit() {

  }

  getInfo(id){
    console.log(id);
    let city: string = "";
    if(id == 'seattle'){
      city = 'seattle, us';
    }
    if (id == 'sanjose') {
      city = 'san jose, us';
    }
    if (id == 'burbank') {
      city = 'burbank, us';
    }
    if (id == 'dallas') {
      city = 'dallas, us';
    }
    if (id == 'dc') {
      city = 'district of columbia, us';
    }
    if (id == 'chicago') {
      city = 'chicago, us';
    }

    if(id != undefined){
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&&appid=f83fa28c9dca41604aad53a9f4c5cf70';
      this._http.get(url).subscribe(
        (info) => {
          //console.log(info);
          this.data = info;
        }, (error) => {
          console.log("Error", error);
        }
      );
    }

    console.log(this.data);
  }

}

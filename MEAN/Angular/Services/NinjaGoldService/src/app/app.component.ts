import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private _dataService: DataService) { }

  gold: Number = 0;

  title = 'app';

  ngInit(){
    this.gold = this._dataService.gold;
  }
}

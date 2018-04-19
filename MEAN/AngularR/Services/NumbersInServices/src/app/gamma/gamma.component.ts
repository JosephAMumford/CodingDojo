import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {

  difference: number = 0;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.difference = this._dataService.difference;
  }

  generate(){
    this._dataService.generateDifference();
    this.difference = this._dataService.difference;
  }

}

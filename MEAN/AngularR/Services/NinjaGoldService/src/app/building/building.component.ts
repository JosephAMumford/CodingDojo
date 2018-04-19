import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  @Input() type: string = "";

  range: string = "";

  constructor(private _dataService: DataService) {
  }

  ngOnInit() {
    if(this.type == 'Farm'){
      this.range = "Earns 2 - 5 Gold";
    }
    if (this.type == 'Cave') {
      this.range = "Earns 5 - 10 Gold";
    }
    if (this.type == 'Casino') {
      this.range = "Earn up to or lose up to 100 Gold";
    }
    if (this.type == 'House') {
      this.range = "Earns 7 - 15 Gold";
    }
  }

  getGold() {
    this._dataService.process(this.type);
  }

}

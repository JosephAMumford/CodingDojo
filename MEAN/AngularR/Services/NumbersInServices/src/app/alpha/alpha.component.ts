import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {

  alpha_numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.alpha_numbers = this._dataService.alpha_numbers;
  }

  generate(){
    this._dataService.generateNumbers(1);
    this.alpha_numbers = this._dataService.alpha_numbers;
  }

}

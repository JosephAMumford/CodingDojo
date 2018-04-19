import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  beta_numbers: number[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.beta_numbers = this._dataService.beta_numbers;
  }

  generate() {
    this._dataService.generateNumbers(2);
    this.beta_numbers = this._dataService.beta_numbers;
  }
}

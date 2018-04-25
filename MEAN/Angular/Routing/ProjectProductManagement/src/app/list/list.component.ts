import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  deleteProduct(id){
    this._dataService.delete_product(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  new_item = new Item();

  constructor(private _dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  //Process Form - add item to list
  triggerEvent(){
    this._dataService.add_product(this.new_item);

    this.new_item = new Item();
    this.router.navigate(['/products']);
  }

}

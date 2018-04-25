import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Item } from '../item';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  current_item: Item;
  new_item = new Item();

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _http: HttpClient, private router: Router) {
    this._route.paramMap.subscribe(params => {
      this.current_item = this._dataService.get_product(params.get("id"));
    })
  }

  ngOnInit() {

  }

  //Process item update
  triggerEvent() {
    this.current_item.name = this.new_item.name;
    this.current_item.price = this.new_item.price;
    this.current_item.image = this.new_item.image;

    this.router.navigate(['/products']);
  }

}

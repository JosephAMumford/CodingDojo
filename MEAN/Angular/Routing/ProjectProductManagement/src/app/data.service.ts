import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class DataService {

  product_list: Item[] = [];

  current_item_id: number;

  constructor() {
    //Starter list
    let newItem = new Item();
    newItem.SetInfo(0, "Camera", "$699.99", "camera.png");
    this.product_list.push(newItem);

    let newItem1 = new Item();
    newItem1.SetInfo(1, "Printer", "$119.99", "printer.png");
    this.product_list.push(newItem1);

    let newItem2 = new Item();
    newItem2.SetInfo(2, "Computer Monitor", "$259.99", "computer_monitor.png");
    this.product_list.push(newItem2);

    let newItem3 = new Item();
    newItem3.SetInfo(3, "Keyboard", "$39.99", "keyboard.png");
    this.product_list.push(newItem3);

    let newItem4 = new Item();
    newItem4.SetInfo(4, "Computer Tower", "$799.99", "computer_tower.png");
    this.product_list.push(newItem4);

    let newItem5 = new Item();
    newItem5.SetInfo(5, "Computer Speakers", "$69.99", "computer_speakers.png");
    this.product_list.push(newItem5);
  }

  add_product(item: Item){
    let nextId = this.product_list.length;
    item.id = nextId;
    this.product_list.push(item);
  }

  get_product(id:string){
    return this.product_list[parseInt(id)];
  }

  delete_product(id: number){
    for(let i = 0; i < this.product_list.length; i++){
      if(this.product_list[i].id == id){
        this.product_list.splice(i, 1);
      }
    }
  }

  edit_product(info: Item){
    for (let i = 0; i < this.product_list.length; i++) {
      if (this.product_list[i].id == info.id) {
        this.product_list[i].id = info.id;
        this.product_list[i].name = info.name;
        this.product_list[i].price = info.price;
        this.product_list[i].image = info.image;
      }
    }
  }
}

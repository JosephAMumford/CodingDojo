import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  gold: number = 0;
  messages: string[] = [];

  constructor() { }

  process(type){
    var message: string;
    var value: number;

    //2-5
    if(type == "Farm"){
      value = Math.floor(Math.random()* 3 + 2);
    }
    //5-10
    if (type == "Cave") {
      value = Math.floor(Math.random() * 5 + 5);
    }
    //+- 100
    if (type == "Casino") {
      value = Math.floor(Math.random() * 200 - 100);
    }
    //7-15
    if (type == "House") {
      value = Math.floor(Math.random() * 8 + 7);
    }

    this.gold += value;

    if(value > 0){
      message = "You've earned " + value + " gold pieces at the " + type;
    }
    else {
      message = "You've lost " + value + " gold pieces at the " + type;
    }

    this.messages.push(message);
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  //var name
  alpha_numbers: number[] = [];
  beta_numbers: number[] = [];
  difference: number = 0;

  constructor() { }

  //methods
  getAlpha(){
    return this.alpha_numbers;
  }

  getBeta(){
    return this.beta_numbers;
  }

  getDiffernce(){
    return this.difference;
  }

  generateDifference(){

    let sum1: number = 0;
    let sum2: number = 0;
    for(let i = 0; i < this.alpha_numbers.length; i++){
      sum1 += this.alpha_numbers[i];
    }

    for(let j = 0; j < this.beta_numbers.length; j++){
      sum2 += this.beta_numbers[j];
    }

    this.difference = sum1 - sum2;

    console.log(this.difference);
  }

  generateNumbers(type) {
    var list: number[] = [];

    let r = Math.floor(Math.random()*10 + 1);

    for(let i = 0; i < r; i++){
      let rand = Math.floor(Math.random()*100);
      list.push(rand);
    }

    if(type == 1){
      this.alpha_numbers = list;
    }
    if(type == 2){
      this.beta_numbers = list;
    }
  }

}

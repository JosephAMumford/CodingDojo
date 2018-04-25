import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  switchboard = new Array<boolean>(10);

  randomize(){
    for(let i = 0; i < 10; i++){
      const rand = Math.random();

      if(rand > 0.5){
        this.switchboard[i] = true;
      }
      else {
        this.switchboard[i] = false;
      }
    }
  }

  press_button(id){
    if(this.switchboard[id] == false){
      this.switchboard[id] = true;
    }
    else {
      this.switchboard[id] = false;
    }
  }

  ngOnInit() {
    this.randomize();
  }
}

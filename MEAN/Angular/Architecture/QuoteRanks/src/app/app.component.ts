import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Quote[] = [];

  dataFromChild(eventData) {
    this.quotes.push(eventData);
  }

  processButton(eventData){
    if(eventData.action == 0){
      this.quotes[eventData.id].votes += 1;
    }
    if (eventData.action == 1) {
      this.quotes[eventData.id].votes -= 1;
    }
    if (eventData.action == 2) {
      this.quotes.splice(eventData.id, 1);
    }
  }
}

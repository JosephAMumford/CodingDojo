import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output() aTaskEventEmitter = new EventEmitter();
  quote = new Quote();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }


  triggerEvent() {
    //  3 Emit the Event
    this.aTaskEventEmitter.emit(this.quote); //we can pass in any data type
    this.quote = new Quote();
  }

}

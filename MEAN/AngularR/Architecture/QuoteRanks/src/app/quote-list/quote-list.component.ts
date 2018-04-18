import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotesList: Quote[];
  @Output() aTaskEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerEvent(_id, _action) {

    var data = { id: _id, action: _action };
    //  3 Emit the Event
    this.aTaskEventEmitter.emit(data); //we can pass in any data type
  }
}

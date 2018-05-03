import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { Note } from '../note';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  new_note = new Note();

  constructor(private _noteService: NoteServiceService) { }

  ngOnInit() {
  }

  //Process Form - add item to list
  triggerEvent() {
    this._noteService.createNote(this.new_note);
    this.new_note = new Note();
  }

}

import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks: Task[] = [
    {
      _id: 1,
      title: 'first task',
      completed: false,
    },
    {
      _id: 2,
      title: 'second task',
      completed: false,
    }
  ];

  constructor(){};
}

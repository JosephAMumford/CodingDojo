import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  form_complete: boolean = false;
  form_submitted: boolean = false;

  user = new User();
  users = [];

  onSubmit(){
    this.form_submitted = true;
    this.users.push(this.user);
    this.user = new User();
  }
}

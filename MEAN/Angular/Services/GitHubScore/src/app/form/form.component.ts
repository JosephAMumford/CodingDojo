import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user = {
    username: ""
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.dataService.getUserInfo(this.user.username);
  }
}

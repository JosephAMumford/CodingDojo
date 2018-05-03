import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  register_user() {
    this.dataService.add_user(this.user).subscribe(user => {
      this.router.navigateByUrl('/browser');
      this.dataService.set_current_user(user);
      this.user = new User();
    });
  }

}

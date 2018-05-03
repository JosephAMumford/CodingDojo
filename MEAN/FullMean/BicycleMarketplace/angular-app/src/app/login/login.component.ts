import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  login_error = null;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  login_user() {
    this.dataService.login_user(this.user).subscribe(user => {
      this.router.navigateByUrl('/browser');
      this.dataService.set_current_user(user);
      this.user = new User();
    });
  }
}

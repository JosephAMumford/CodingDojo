import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

import { Listing } from '../listing';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  listing = new Listing();

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  submit_listing(){
    this.dataService.create_listing(this.listing).subscribe(listing => {
      this.router.navigateByUrl('/browser');
      this.listing = new Listing();
    });
  }
}

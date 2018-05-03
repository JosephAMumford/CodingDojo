import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Listing } from '../listing';
import { User } from '../user';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  contact: User = new User();
  listings: Array<Listing> = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.get_all_listings().subscribe(listings => {
      this.listings = listings;
    });
  }

  get_contact(id: number){
    this.contact = this.dataService.get_user(id);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Listing } from '../listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listing = new Listing();
  listings: Array<Listing> = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.get_current_listings().subscribe(listings => {
      this.listings = listings;
      console.log(this.listings);
    });
    this.dataService.update_listing(this.listing).subscribe(listing => {

    })
  }

  update_listing(){

  }

}

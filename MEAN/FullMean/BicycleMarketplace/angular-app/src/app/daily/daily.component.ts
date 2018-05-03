import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Listing } from '../listing';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  listing: Array<Listing> = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getRandomListing().subscribe(listing => {
      this.listing = listing;
    });
  }

}

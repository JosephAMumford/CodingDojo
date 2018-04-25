import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  current_time = new Date();
  time_zone: string;
  active: number;

  getCurrentTime(zone) {
    this.active = zone;

    this.current_time = new Date();

    // EST
    if (zone === 0) {
      this.time_zone = '-0400';
    }

    // CST
    if (zone === 1) {
      this.time_zone = '-0500';
    }

    // MST
    if (zone === 2) {
      this.time_zone = '-0600';
    }

    // PST
    if (zone === 3) {
      this.time_zone = '-0700';
    }
  }

  getClass(value) {
    if (value === this.active) {
      return 'active-button button-a';
    } else {
      return 'inactive-button button-a';
    }
  }
}

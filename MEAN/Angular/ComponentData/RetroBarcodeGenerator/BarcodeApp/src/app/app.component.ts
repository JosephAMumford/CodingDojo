import { Component, OnInit } from '@angular/core';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  colors: string[] = ['red', 'orangered', 'orange', 'yellow', 'greenyellow', 'green', 'blue', 'indigo', 'violet'];
  random_colors = new Array<string>(9);

  randomize() {
    let currentColor = 0;

    while (currentColor < 9) {
        const rand = Math.floor(Math.random() * 9);
        if (this.random_colors[rand] == null) {
          this.random_colors[rand] = this.colors[currentColor];
            currentColor++;
        }
    }
  }

  ngOnInit() {
    this.randomize();
  }

}

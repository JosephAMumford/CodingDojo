import { Component } from '@angular/core';
import { PowerLevel } from './PowerLevel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myPowerLevel = new PowerLevel();
  power: PowerLevel;

  type: string[] = ["Human", "Saiyan","SuperSaiyan","SuperSaiyanTwo","SuperSaiyanThree", "SuperSaiyanFour"];

  onSubmit() {
    console.log(this.myPowerLevel);
    this.power = this.myPowerLevel;
    this.myPowerLevel = new PowerLevel();
  }
}

import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PowerLevel } from '../PowerLevel';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  @Input() value: PowerLevel;
  @Input() type: string;

  sub_value: number;
  sub_type: string;

  constructor() {
    this.sub_type = this.type;
    this.sub_value = 1;
  }

  ngOnInit() {
    this.sub_type = this.type;
    this.sub_value = 1;
  }

  ngOnChanges(){
    if(this.sub_type == "Human"){
      this.sub_value = this.value.level * 1;
    }
    if (this.sub_type == "Saiyan") {
      this.sub_value = this.value.level * 10;
    }
    if (this.sub_type == "SuperSaiyan") {
      this.sub_value = this.value.level * 90;
    }
    if (this.sub_type == "SuperSaiyanTwo") {
      this.sub_value = this.value.level * 150;
    }
    if (this.sub_type == "SuperSaiyanThree") {
      this.sub_value = this.value.level * 250;
    }
    if (this.sub_type == "SuperSaiyanFour") {
      this.sub_value = this.value.level * 500;
    }

  }
}

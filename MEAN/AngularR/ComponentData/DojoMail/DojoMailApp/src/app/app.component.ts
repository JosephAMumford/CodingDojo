import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  users = [
    {email:"Bill@Gates.com", importance: true, subject: "New Windows", content: "Windows XI will launch in year 2100."},
    {email:"Ada@Lovelace.com", importance: true, subject: "Programming", content: "Enchatress of Numbers"},
    {email:"John@Carmac.com", importance: false, subject: "Updated Algo", content: "New algorithm for shadow volumes."},
    {email:"Gabe@Newel.com", importance: false, subject: "HL3!", content: "Just kdding..."}
  ];
}

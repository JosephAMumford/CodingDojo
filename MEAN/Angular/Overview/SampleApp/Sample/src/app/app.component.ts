import { Component } from '@angular/core';
@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css']
})
export class AppComponent { 
	user = {
		firstName: 'Darth',
		lastName: 'Vader'
	}
	amount = 1.20;
	today = new Date();
}
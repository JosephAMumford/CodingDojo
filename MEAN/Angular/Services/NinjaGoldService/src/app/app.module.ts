import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BuildingComponent } from './building/building.component';
import { MessagesComponent } from './messages/messages.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

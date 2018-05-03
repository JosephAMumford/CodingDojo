import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DailyComponent } from './daily/daily.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListingComponent } from './listing/listing.component';
import { BrowserComponent } from './browser/browser.component';
import { CreateComponent } from './create/create.component';

import { DataService } from './data.service';
import { FilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DailyComponent,
    LoginComponent,
    RegisterComponent,
    ListingComponent,
    BrowserComponent,
    CreateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

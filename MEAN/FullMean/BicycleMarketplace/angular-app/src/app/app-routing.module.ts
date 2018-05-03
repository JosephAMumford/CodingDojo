import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserComponent } from './browser/browser.component';
import { CreateComponent } from './create/create.component';
import { DailyComponent } from './daily/daily.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browser', component: BrowserComponent },
  { path: 'users', redirectTo: 'browser', pathMatch: 'full'},
  { path: 'create', component: CreateComponent },
  { path: 'daily', component: DailyComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

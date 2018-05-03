import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from "./user";
import { Listing } from "./listing";

@Injectable()
export class DataService {

  private userBase = '/users';
  private listBase = '/listings';
  users: User[] = [];
  listings: Listing[] = [];

  current_user = { active: false, username: "", user_id: 0 }

  constructor(private _http: HttpClient) { }

  add_user(user: User): Observable<User> {
    return this._http.post<User>(this.userBase, user);
  }

  get_user(id: number){
    //Get user from database
    return new User();
  }

  login_user(user: User): Observable<User> {
    //Compare submitted user
    return this._http.post<User>('login',user);
  }

  set_current_user(user: User){
    this.current_user.username = user.first_name + " " + user.last_name;
    this.current_user.user_id = user.user_id;
    this.current_user.active = true;
    console.log(this.current_user);
  }

  logout(){
    this.current_user = { active: false, username: "", user_id: 0 }
  }

  create_listing(listing: Listing): Observable<Listing>{
    listing.user_id = this.current_user.user_id;
    return this._http.post<Listing>(this.listBase, listing);
  }

  get_listing(id: number){
  }

  get_all_listings(): Observable<Listing[]>{
    return this._http.get<Listing[]>(this.listBase);
  }

  get_current_listings(): Observable<Listing[]>{
    this.current_user.user_id;
    return this._http.get<Listing[]>(`${this.listBase}/${this.current_user.user_id}`);
  }

  getRandomListing(): Observable<Listing[]>{
    return this._http.get<Listing[]>('/random');
  }

  update_listing(listing: Listing): Observable<Listing> {
    return this._http.put<Listing>('/update', listing);
  }

  delete_listing(id: number): Observable<Listing> {
    console.log('delete');
    console.log(id);
    return this._http.get<Listing>(`destroy/${id}`);
  }

  test(){
    this._http.get('/index');
  }
}

import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor(private http: HttpService) { }

  getUsers(){
    return this.http.get('users');
  }

  getUserById(id: number){
    return this.http.get(`users/${id}`);
  }

}

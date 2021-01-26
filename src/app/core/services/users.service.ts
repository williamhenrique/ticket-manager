import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
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

  getUserByEmail(email: string){
    return this.http.get('users', {email})
  }

}

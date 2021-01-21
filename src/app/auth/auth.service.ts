import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from '../core/services/http.service';
import { Login, Register } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpService) { }

  login(body: Login){
    return this.http.post('auth/login', body);
  }

  register(body: Register){
    return this.http.post('auth/register', body).pipe(
      map(({access_token} )=> {
        localStorage.setItem('token', access_token)
      })
    );
  }

}

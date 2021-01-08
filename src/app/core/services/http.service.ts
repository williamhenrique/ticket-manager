import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

private readonly api = environment.api;

constructor(private http: HttpClient) { }

  get<T>(endpoint){
    return this.http.get<T>(`${this.api}/${endpoint}`).pipe(
      distinctUntilChanged(),
    );
  }

}

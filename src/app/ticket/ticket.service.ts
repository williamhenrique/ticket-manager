import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap, switchMap, tap, toArray } from 'rxjs/operators';
import { Ticket } from './ticket.model';
import { HttpService } from '../core/services/http.service';
import { UsersService } from '../core/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpService, private user: UsersService) { }

  getTickets(completed = true): Observable<Ticket[]>{
    return this.http.get<Ticket[]>('tickets', {completed}).pipe(
      switchMap(ticket => from(ticket)),
      mergeMap(ticket => {
        return this.user.getUserById(ticket.assigneeId).pipe(
          map(user => {
            ticket.assigneeName = user['name'];
            return ticket;
          })
        )

      }),
      toArray()
    );
  }

}

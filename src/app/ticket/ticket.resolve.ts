import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Ticket } from "./ticket.model";
import { TicketService } from './ticket.service';

@Injectable()
export class TicketResolve implements Resolve<Ticket[]>{

  constructor(private ticket: TicketService){
  }

  resolve(route: ActivatedRouteSnapshot){
    console.log('teste', route.params.name);
    let status = true
    if(route.params.name === 'close'){
      status = false
    }

    return this.ticket.getTickets(status);
  }
}

import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tickets$ = this.ticket.getTickets();
  canDisplayGrid = false;

  constructor(private ticket: TicketService) { }

  ngOnInit(): void {
  }

  showDisplayGrid(){
    this.canDisplayGrid = !this.canDisplayGrid;
  }

}

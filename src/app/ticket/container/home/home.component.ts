import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { TicketService } from '../../ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tickets$ = this.route.data.pipe(pluck('ticket'));
  canDisplayGrid = false;

  constructor(private ticket: TicketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tickets$.subscribe(v => {
      console.log('tickets', v)
    })
    // console.log('teste 1', this.route.data);
    // console.log('teste 2', this.route);

    // this.route.data.subscribe(value => {
    //   console.log('My', value);
    // })

  }

  showDisplayGrid(){
    this.canDisplayGrid = !this.canDisplayGrid;
  }

}

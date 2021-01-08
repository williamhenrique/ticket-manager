import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../ticket.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() tickets: Ticket[];

  constructor() { }

  ngOnInit() {
  }

}

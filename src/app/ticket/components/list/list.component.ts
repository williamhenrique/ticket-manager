import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Ticket } from '../../ticket.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  columns: PoTableColumn[] = [
    {property: 'title', label: 'Title' },
    {property: 'description', label: 'Description' },
    {property: 'assigneeName', label: 'Assignee' },
    {property: 'deadline', label: 'Finish Date', type: 'date', format: 'dd-MM-yyyy'},
    // {property: 'deadline', label: 'Data limite', type: 'date', format: 'dd-MM-yyyy'},
    {property: 'completed', label: 'Status', type: 'label', labels: [
      { value: 'true', color: 'color-11', label: 'Ativo' },
      { value: 'false', color: 'color-08', label: 'Desativado' }
    ]}

  ];

  @Input() tickets: Ticket[];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('', changes);

    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

}

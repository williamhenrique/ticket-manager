import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';
import { TotalComponent } from './components/total/total.component';

import { HomeComponent } from './container/home/home.component';
import { TicketComponent } from './container/ticket/ticket.component';
import { TicketResolve } from './ticket.resolve';

const routes: Routes = [
  {
    path: 'ticket',
    children: [
      {path: 'create', component: TicketComponent},
      {
        path: 'view/:name',
        component: HomeComponent,
        resolve: {
          ticket: TicketResolve
        }
      },
    ]
  },
];

@NgModule({
  declarations: [HomeComponent, ListComponent, GridComponent, TicketComponent, TotalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [TicketResolve]
})
export class TicketModule { }

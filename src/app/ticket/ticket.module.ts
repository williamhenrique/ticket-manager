import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';
import { TotalComponent } from './components/total/total.component';

import { HomeComponent } from './container/home/home.component';
import { TicketComponent } from './container/ticket/ticket.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: TicketComponent}
];

@NgModule({
  declarations: [HomeComponent, ListComponent, GridComponent, TicketComponent, TotalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TicketModule { }

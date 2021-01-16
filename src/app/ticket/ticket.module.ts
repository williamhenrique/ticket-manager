import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';

import { HomeComponent } from './container/home/home.component';
import { TicketComponent } from './container/ticket/ticket.component';
import { PoModule } from '@po-ui/ng-components';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new', component: TicketComponent}
];

@NgModule({
  declarations: [HomeComponent, ListComponent, GridComponent, TicketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TicketModule { }

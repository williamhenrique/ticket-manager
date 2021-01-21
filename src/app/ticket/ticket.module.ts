import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';


import { HomeComponent } from './container/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [HomeComponent, ListComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TicketModule { }

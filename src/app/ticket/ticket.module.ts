import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './container/home/home.component';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { GridComponent } from './components/grid/grid.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  declarations: [HomeComponent, ListComponent, GridComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TicketModule { }

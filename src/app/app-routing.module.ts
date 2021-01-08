import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'ticket', pathMatch: 'full'},
  {path: 'ticket', loadChildren: ()=> import('./ticket/ticket.module').then(m => m.TicketModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

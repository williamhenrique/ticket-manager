import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {path: 'ticket', loadChildren: ()=> import('./ticket/ticket.module').then(m => m.TicketModule) },
  {path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule) },
  // {path: '**', redirectTo: 'ticket/(ticket/open)'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

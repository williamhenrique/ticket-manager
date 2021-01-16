import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){

  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', link: '/'},
    { label: 'Ticket', link: 'ticket/new' }

  ];

  navigateTo(link: string): void{
    this.router.navigate([link]);
  }

  private onClick() {
    alert('Clicked in menu item')
  }

}

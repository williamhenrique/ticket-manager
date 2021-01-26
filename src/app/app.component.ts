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
    { label: 'Home', link: 'ticket/view/open'},
    { label: 'Historic', link: 'ticket/view/close'},
    { label: 'Create', link: 'ticket/create'},

  ];

  navigateTo(link: string): void{
    this.router.navigate([link]);
  }

  private onClick() {
    alert('Clicked in menu item')
  }

}

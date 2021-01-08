import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoInfoModule, PoListViewModule, PoTableModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PoTableModule,
    PoListViewModule,
    PoInfoModule,
    PoButtonModule,
  ],
  exports: [PoTableModule, PoListViewModule, PoInfoModule, PoButtonModule]
})
export class SharedModule { }

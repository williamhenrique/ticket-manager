import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoInfoModule, PoListViewModule, PoTableModule } from '@po-ui/ng-components';
import { DevModeComponent } from './dev-mode/dev-mode.component';

@NgModule({
  declarations: [DevModeComponent],
  imports: [
    CommonModule,
    PoTableModule,
    PoListViewModule,
    PoInfoModule,
    PoButtonModule,
  ],
  exports: [PoTableModule, PoListViewModule, PoInfoModule, PoButtonModule, DevModeComponent]
})
export class SharedModule { }

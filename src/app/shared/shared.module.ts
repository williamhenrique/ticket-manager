import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoFieldModule, PoInfoModule, PoListViewModule, PoTableModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevModeComponent } from './dev-mode/dev-mode.component';

@NgModule({
  declarations: [DevModeComponent],
  imports: [
    CommonModule,
    PoTableModule,
    PoListViewModule,
    PoInfoModule,
    PoButtonModule,
    PoFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [PoTableModule, PoListViewModule, PoInfoModule, PoButtonModule, PoFieldModule, ReactiveFormsModule, FormsModule, DevModeComponent],

})
export class SharedModule { }

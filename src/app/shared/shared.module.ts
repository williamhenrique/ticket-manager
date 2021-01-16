import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoFieldModule, PoInfoModule, PoListViewModule, PoTableModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
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
  exports: [PoTableModule, PoListViewModule, PoInfoModule, PoButtonModule, PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class SharedModule { }

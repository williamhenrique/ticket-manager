import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoButtonModule, PoFieldModule, PoInfoModule, PoListViewModule, PoTableModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevModeComponent } from './components/dev-mode/dev-mode.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [DevModeComponent, CustomDatePipe],
  imports: [
    CommonModule,
    PoTableModule,
    PoListViewModule,
    PoInfoModule,
    PoButtonModule,
    PoFieldModule,
    ReactiveFormsModule,
    FormsModule,
    PoFieldModule
  ],
  exports: [PoTableModule, PoListViewModule, PoInfoModule, PoButtonModule, PoFieldModule, ReactiveFormsModule, FormsModule, DevModeComponent, CustomDatePipe],
  providers: [CustomDatePipe]

})
export class SharedModule { }

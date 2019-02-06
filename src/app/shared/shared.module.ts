import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderDirective } from './directives/border.directive';
import { TimePipe } from './pipes/time.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    BorderDirective,
    TimePipe,
    OrderByPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BorderDirective,
    TimePipe,
    OrderByPipe,
    SearchPipe
  ]
})
export class SharedModule {}

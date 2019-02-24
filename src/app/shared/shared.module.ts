import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderDirective } from './directives/border.directive';
import { TimePipe } from './pipes/time.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { FirstCharUppercasePipe } from './pipes/firstcharuppercase.pipe';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoContentComponent } from './components/no-content/no-content.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    NoContentComponent,
    BorderDirective,
    TimePipe,
    OrderByPipe,
    FirstCharUppercasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    BorderDirective,
    TimePipe,
    OrderByPipe,
    FirstCharUppercasePipe
  ]
})
export class SharedModule {}

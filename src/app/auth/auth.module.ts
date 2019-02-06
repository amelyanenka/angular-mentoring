import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    FormsModule
  ],
  /*exports: [
    AuthComponent
  ]*/
})
export class AuthModule {}

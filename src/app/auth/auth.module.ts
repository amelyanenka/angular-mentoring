import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CoreModule,
    CommonModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {}

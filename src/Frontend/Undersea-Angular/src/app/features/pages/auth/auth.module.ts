import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth_routing';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SharedModule } from './../../../shared/shared.module';



@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }

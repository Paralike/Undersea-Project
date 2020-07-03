import { MainPageComponent } from './components/main-page/main-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from '../auth/service/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

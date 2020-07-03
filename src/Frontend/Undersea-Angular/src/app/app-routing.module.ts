import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthGuardService as AuthGuard
} from './features/pages/auth/service/auth-guard.service';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/pages/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'main',
    loadChildren: () => import('./features/pages/main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

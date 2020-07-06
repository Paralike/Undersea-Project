import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { environment } from 'src/environments/environment';
import { API_BASE_URL } from '../shared';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule

  ],
  exports: [
    SharedModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.ApiBaseUrl }
  ]
})
export class CoreModule { }

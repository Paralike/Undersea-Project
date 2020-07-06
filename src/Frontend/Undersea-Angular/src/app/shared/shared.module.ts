import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { AuthClient, ProfileClient, BuildingsClient } from '.';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthGuardService } from '../features/pages/auth/service/auth-guard.service';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSliderModule,
    MatSelectModule
  ],
  exports: [
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule,
    MatDividerModule,
    MatSliderModule,
    MatSelectModule
  ],
  providers: [
    AuthClient,
    AuthGuardService,
    ProfileClient,
    BuildingsClient
  ]

})
export class SharedModule { }

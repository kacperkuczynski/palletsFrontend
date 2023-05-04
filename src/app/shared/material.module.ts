import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatListModule,
    MatSidenavModule
  ],
  exports: [
    MatSnackBarModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }

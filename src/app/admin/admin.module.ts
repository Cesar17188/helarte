import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';

import { NavComponent } from './component/nav/nav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';



@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }

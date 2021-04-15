import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './components/order/order.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';


import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';
import { CartComponent } from './container/cart/cart.component';
import { ComprobanteComponent } from './components/comprobante/comprobante.component';
@NgModule({
  declarations: [
    OrderComponent,
    DatosPersonalesComponent,
    CartComponent,
    ComprobanteComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }

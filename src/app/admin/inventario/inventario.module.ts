import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { ToppingsSalComponent } from './components/toppings-sal/toppings-sal.component';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  declarations: [
    ToppingsSalComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }

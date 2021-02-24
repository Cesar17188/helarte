import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { ToppingsSalComponent } from './components/toppings-sal/toppings-sal.component';
import { ListaComponent } from './components/lista/lista.component';
import { ToppingsSalContainerComponent } from './containers/toppings-sal-container/toppings-sal-container.component';

import { MaterialModule } from '@material/material.module';
@NgModule({
  declarations: [
    ToppingsSalComponent,
    ListaComponent,
    ToppingsSalContainerComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    MaterialModule
  ]
})
export class InventarioModule { }

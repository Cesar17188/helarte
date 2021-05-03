import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InventarioRoutingModule } from './inventario-routing.module';
import { ToppingsSalComponent } from './components/toppings-sal/toppings-sal.component';
import { ListaComponent } from './components/lista/lista.component';
import { ToppingsSalContainerComponent } from './containers/toppings-sal-container/toppings-sal-container.component';

import { MaterialModule } from '@material/material.module';
import { ToppingsDulceContainerComponent } from './containers/toppings-dulce-container/toppings-dulce-container.component';
import { ToppingsDulceComponent } from './components/toppings-dulce/toppings-dulce.component';
import { SyrupsContainerComponent } from './containers/syrups-container/syrups-container.component';
import { SyrupsComponent } from './components/syrups/syrups.component';
import { SaboresComponent } from './components/sabores/sabores.component';
import { SaboresContainerComponent } from './containers/sabores-container/sabores-container.component';
import { FrutasContainerComponent } from './containers/frutas-container/frutas-container.component';
import { FrutasComponent } from './components/frutas/frutas.component';
import { CremaContainerComponent } from './containers/crema-container/crema-container.component';
import { CremaComponent } from './components/crema/crema.component';
import { CremaFormComponent } from './components/crema-form/crema-form.component';
@NgModule({
  declarations: [
    ToppingsSalComponent,
    ListaComponent,
    ToppingsSalContainerComponent,
    ToppingsDulceContainerComponent,
    ToppingsDulceComponent,
    SyrupsContainerComponent,
    SyrupsComponent,
    SaboresComponent,
    SaboresContainerComponent,
    FrutasContainerComponent,
    FrutasComponent,
    CremaContainerComponent,
    CremaComponent,
    CremaFormComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class InventarioModule { }

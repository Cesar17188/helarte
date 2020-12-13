import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FlavorComponent } from './components/flavor/flavor.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { SyrupComponent } from './components/syrup/syrup.component';
import { ToppingComponent } from './components/topping/topping.component';
import { ToppingSalComponent } from './components/topping-sal/topping-sal.component';


import { FrutasContainer } from './containers/frutas/frutas.container';
import { SaboresContainer } from './containers/sabores/sabores.container';
import { SyrupsContainer } from './containers/syrups/syrups.container';
import { ToppingsContainer } from './containers/toppings/toppings.container';
import { ToppingsSalContainer } from './containers/toppings-sal/toppings-sal.container';
import { MaterialModule } from '@material/material.module';



@NgModule({
  declarations: [
    FlavorComponent,
    FrutaComponent,
    SyrupComponent,
    ToppingComponent,
    ToppingSalComponent,
    FrutasContainer,
    SaboresContainer,
    SyrupsContainer,
    ToppingsContainer,
    ToppingsSalContainer
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [
    SaboresContainer
  ]
})
export class IngredientsModule { }

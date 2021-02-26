import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from '@admin/inventario/components/lista/lista.component';
import { ToppingsSalContainerComponent } from './containers/toppings-sal-container/toppings-sal-container.component';
import { ToppingsDulceContainerComponent } from './containers/toppings-dulce-container/toppings-dulce-container.component';
import { SyrupsContainerComponent } from './containers/syrups-container/syrups-container.component';
import { SaboresContainerComponent } from './containers/sabores-container/sabores-container.component';
import { FrutasContainerComponent } from './containers/frutas-container/frutas-container.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  },
  {
    path: 'topping-sal',
    component: ToppingsSalContainerComponent
  },
  {
    path: 'topping-dulce',
    component: ToppingsDulceContainerComponent
  },
  {
    path: 'syrups',
    component: SyrupsContainerComponent
  },
  {
    path: 'sabores',
    component: SaboresContainerComponent
  },
  {
    path: 'frutas',
    component: FrutasContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InventarioRoutingModule { }

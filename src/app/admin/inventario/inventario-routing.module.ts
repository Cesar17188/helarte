import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from '@admin/inventario/components/lista/lista.component';
import { ToppingsSalContainerComponent } from './containers/toppings-sal-container/toppings-sal-container.component';
import { ToppingsDulceContainerComponent } from './containers/toppings-dulce-container/toppings-dulce-container.component';
import { SyrupsContainerComponent } from './containers/syrups-container/syrups-container.component';
import { SaboresContainerComponent } from './containers/sabores-container/sabores-container.component';
import { FrutasContainerComponent } from './containers/frutas-container/frutas-container.component';
import { CremaContainerComponent } from './containers/crema-container/crema-container.component';
import { CremaFormComponent } from './components/crema-form/crema-form.component';
import { CremaComponent } from './components/crema/crema.component';

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
  },
  {
    path: 'crema',
    component: CremaComponent
  },
  {
    path: 'crema/create',
    component: CremaContainerComponent
  },
  {
    path: 'crema/edit',
    component: CremaContainerComponent
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

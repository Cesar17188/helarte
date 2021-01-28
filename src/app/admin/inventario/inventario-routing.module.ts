import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent } from '@admin/inventario/components/lista/lista.component';
import { ToppingsSalContainerComponent } from './containers/toppings-sal-container/toppings-sal-container.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  },
  {
    path: 'topping',
    component: ToppingsSalContainerComponent
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

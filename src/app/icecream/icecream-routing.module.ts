import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IceproductsContainer } from './containers/iceproducts/iceproducts.container';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IceproductsContainer
  },
  {
    path: ':codigo',
    component: IcecreamDetailComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class IcecreamRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafesproductsContainer } from './containers/cafesproducts/cafesproducts.containers';
import { CafeDetailComponent } from './components/cafe-detail/cafe-detail.component';


const routes: Routes = [
  {
    path: '',
    component: CafesproductsContainer
  },
  {
    path: ':codigo',
    component: CafeDetailComponent
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
export class CafeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepesproductsContainer } from './containers/crepesproducts/crepesproducts.container';
import { CrepeDetailComponent } from './components/crepe-detail/crepe-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CrepesproductsContainer
  },
  {
    path: ':codigo',
    component: CrepeDetailComponent
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
export class CrepeRoutingModule { }

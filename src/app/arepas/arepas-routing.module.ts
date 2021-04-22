import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArepasDetailComponent } from './components/arepas-detail/arepas-detail.component';
import { ArepasproductsComponent } from './containers/arepasproducts/arepasproducts.component';

const routes: Routes = [
  {
    path: '',
    component: ArepasproductsComponent
  },
  {
    path: ':codigo',
    component: ArepasDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArepasRoutingModule { }

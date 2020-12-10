// módulos de carga nativos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// componentes a mostrar por medio de rutas
import { ShakeproductsContainer } from '@shake/containers/shakeproducts/shakeproducts.container';
import { ShakedetailComponent } from '@shake/components/shakedetail/shakedetail.component';

const routes: Routes = [
  { path: '',
  component: ShakeproductsContainer
  },
  {
    path: ':codigo',
    component: ShakedetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ShakeRoutingModule { }

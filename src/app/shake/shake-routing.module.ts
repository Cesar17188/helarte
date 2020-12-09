// módulos de carga nativos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// componentes a mostrar por medio de rutas
import { ShakeproductsComponent } from '@shake/containers/shakeproducts/shakeproducts.component';
import { ShakedetailComponent } from '@shake/components/shakedetail/shakedetail.component';

const routes: Routes = [
  { path: '',
  component: ShakeproductsComponent
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

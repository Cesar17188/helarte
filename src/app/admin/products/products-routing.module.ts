import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { HeladoComponent } from './containers/helado/helado.component';

const routes: Routes = [
  {
    path: '',
    component: ListaComponent
  },
  {
    path: 'helado/create',
    component: HeladoComponent
  },
  {
    path: 'helado/edit/:codigo',
    component: HeladoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

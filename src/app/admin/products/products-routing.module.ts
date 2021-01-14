import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { CafeComponent } from './containers/cafe/cafe.component';
import { CrepeComponent } from './containers/crepe/crepe.component';
import { HeladoComponent } from './containers/helado/helado.component';
import { ShakeComponent } from './containers/shake/shake.component';

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
  },
  {
    path: 'crepe/create',
    component: CrepeComponent
  },
  {
    path: 'crepe/edit/:codigo',
    component: CrepeComponent
  },
  {
    path: 'shake/create',
    component: ShakeComponent
  },
  {
    path: 'shake/edit/:codigo',
    component: ShakeComponent
  },
  {
    path: 'cafe/create',
    component: CafeComponent
  },
  {
    path: 'cafe/edit/:codigo',
    component: CafeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

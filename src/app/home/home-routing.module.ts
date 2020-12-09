// módulos de carga nativos de Angular
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes a mostrar por medio de rutas
import { HomeComponent } from '@home/components/home/home.component';

const routes: Routes = [
  { path: '',
   component: HomeComponent
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
export class HomeRoutingModule { }

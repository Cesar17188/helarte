import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepesComponent } from './components/crepes/crepes.component';

const routes: Routes = [
  { path: '',
    component: CrepesComponent
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

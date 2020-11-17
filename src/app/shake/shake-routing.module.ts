import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShakeComponent } from './shake.component';

const routes: Routes = [{ path: '', component: ShakeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShakeRoutingModule { }

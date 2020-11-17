import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepeComponent } from './crepe.component';

const routes: Routes = [{ path: '', component: CrepeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrepeRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafesComponent } from './components/cafes/cafes.component';
import { CafeDetailComponent } from './components/cafe-detail/cafe-detail.component';
import { CafesproductsContainer } from './containers/cafesproducts/cafesproducts.containers';

import { CafeRoutingModule } from './cafe-routing.module';
import { ShareModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
@NgModule({
  declarations: [
    CafesComponent,
    CafeDetailComponent,
    CafesproductsContainer
  ],
  imports: [
    CommonModule,
    CafeRoutingModule,
    ShareModule,
    MaterialModule
  ]
})
export class CafeModule { }

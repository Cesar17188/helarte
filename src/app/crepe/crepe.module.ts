import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrepesComponent } from './components/crepes/crepes.component';
import { CrepesproductsContainer } from './containers/crepesproducts/crepesproducts.container';
import { CrepeDetailComponent } from './components/crepe-detail/crepe-detail.component';

import { CrepeRoutingModule } from './crepe-routing.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
@NgModule({
  declarations: [
    CrepesComponent,
    CrepesproductsContainer,
    CrepeDetailComponent,
  ],
  imports: [
    CommonModule,
    CrepeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class CrepeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArepasRoutingModule } from './arepas-routing.module';
import { ArepasproductsComponent } from './containers/arepasproducts/arepasproducts.component';
import { ArepasComponent } from './components/arepas/arepas.component';
import { ArepasDetailComponent } from './components/arepas-detail/arepas-detail.component';

import { MaterialModule } from '@material/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ArepasproductsComponent,
    ArepasComponent,
    ArepasDetailComponent
  ],
  imports: [
    CommonModule,
    ArepasRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class ArepasModule { }

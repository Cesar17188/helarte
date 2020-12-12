import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcecreamRoutingModule } from './icecream-routing.module';
import { ShareModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';

import { IceproductsContainer } from './containers/iceproducts/iceproducts.container';
import { HeladosComponent } from './components/helados/helados.component';
import { IcecreamDetailComponent } from './components/icecream-detail/icecream-detail.component';

import { IngredientsModule } from '@ingredients/ingredients.module';
@NgModule({
  declarations: [
    IceproductsContainer,
    HeladosComponent,
    IcecreamDetailComponent
  ],
  imports: [
    CommonModule,
    IcecreamRoutingModule,
    ShareModule,
    MaterialModule,
    IngredientsModule
  ]
})
export class IcecreamModule { }

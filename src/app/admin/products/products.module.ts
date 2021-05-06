import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';

import { ProductsRoutingModule } from './products-routing.module';

import { CafesComponent } from './components/cafes/cafes.component';
import { CrepesComponent } from './components/crepes/crepes.component';
import { ShakesComponent } from './components/shakes/shakes.component';
import { HeladosComponent } from './components/helados/helados.component';
import { ListaComponent } from './components/lista/lista.component';
import { CafeFormComponent } from './components/cafe-form/cafe-form.component';
import { CrepeFormComponent } from './components/crepe-form/crepe-form.component';
import { ShakeFormComponent } from './components/shake-form/shake-form.component';
import { HeladoFormComponent } from './components/helado-form/helado-form.component';
import { CafeComponent } from './containers/cafe/cafe.component';
import { CrepeComponent } from './containers/crepe/crepe.component';
import { ShakeComponent } from './containers/shake/shake.component';
import { HeladoComponent } from './containers/helado/helado.component';
import { ArepaComponent } from './containers/arepa/arepa.component';
import { ArepaFormComponent } from './components/arepa-form/arepa-form.component';
import { ArepasComponent } from './components/arepas/arepas.component';

@NgModule({
  declarations: [
    CafesComponent,
    CrepesComponent,
    ShakesComponent,
    HeladosComponent,
    ListaComponent,
    CafeFormComponent,
    CrepeFormComponent,
    ShakeFormComponent,
    HeladoFormComponent,
    CafeComponent,
    CrepeComponent,
    ShakeComponent,
    HeladoComponent,
    ArepaComponent,
    ArepaFormComponent,
    ArepasComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ProductsModule { }

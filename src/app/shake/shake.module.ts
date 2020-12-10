// módulos de carga nativos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes del módulo shake
import { ShakedetailComponent } from '@shake/components/shakedetail/shakedetail.component';
import { ShakesComponent } from '@shake/components/shakes/shakes.component';
import { ShakeproductsContainer } from '@shake/containers/shakeproducts/shakeproducts.container';

// módulo para enrutamiento del módulo shake
import { ShakeRoutingModule } from '@shake/shake-routing.module';

// módulos de carga de componentes externos complementarios
import { ShareModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
@NgModule({
  declarations: [
    ShakesComponent,
    ShakedetailComponent,
    ShakeproductsContainer
  ],
  imports: [
    CommonModule,
    ShakeRoutingModule,
    ShareModule,
    MaterialModule
  ]
})
export class ShakeModule { }

// módulos de carga nativos de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes del módulo home
import { HomeComponent } from '@home/components/home/home.component';
import { ProductComponent } from '@home/components/product/product.component';
import { ProductsContainer } from '@home/containers/products/products.container';

// módulo para enrutamiento del módulo shake
import { HomeRoutingModule } from '@home/home-routing.module';

// módulos de carga de componentes externos complementarios
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material/material.module';
@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductsContainer
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }

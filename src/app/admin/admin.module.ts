import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@material/material.module';

import { NavComponent } from './component/nav/nav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListasComponent } from './component/listas/listas.component';
import { ListaCafesComponent } from './component/listado/components/lista-cafes/lista-cafes.component';
import { ListaCrepesComponent } from './component/listado/components/lista-crepes/lista-crepes.component';
import { ListaHeladosComponent } from './component/listado/components/lista-helados/lista-helados.component';
import { ListaProductosComponent } from './component/listado/components/lista-productos/lista-productos.component';
import { ListaShakesComponent } from './component/listado/components/lista-shakes/lista-shakes.component';
import { ListaUsuariosComponent } from './component/listado/components/lista-usuarios/lista-usuarios.component';




@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    ListasComponent,
    ListaCafesComponent,
    ListaCrepesComponent,
    ListaHeladosComponent,
    ListaProductosComponent,
    ListaShakesComponent,
    ListaUsuariosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }

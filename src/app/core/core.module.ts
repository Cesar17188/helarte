import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsService } from './services/products/products.service';
import { CrepesService } from './services/crepes/crepes.service';
import { CafesService } from './services/cafes/cafes.service';
import { HeladosService } from './services/helados/helados.service';
import { SaboresService } from './services/sabores/sabores.service';
import { CartService } from './services/cart/cart.service';
import { AuthService } from './services/auth/auth.service';
import { ClientsService } from './services/clients/clients.service';
import { UsersService } from './services/users/users.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService,
    CrepesService,
    CafesService,
    HeladosService,
    SaboresService,
    CartService,
    AuthService,
    ClientsService,
    UsersService
  ]
})
export class CoreModule { }

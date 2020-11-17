import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IcecreamRoutingModule } from './icecream-routing.module';
import { IcecreamComponent } from './icecream.component';


@NgModule({
  declarations: [IcecreamComponent],
  imports: [
    CommonModule,
    IcecreamRoutingModule
  ]
})
export class IcecreamModule { }

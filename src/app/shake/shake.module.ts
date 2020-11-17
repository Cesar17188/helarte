import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShakeRoutingModule } from './shake-routing.module';
import { ShakeComponent } from './shake.component';


@NgModule({
  declarations: [ShakeComponent],
  imports: [
    CommonModule,
    ShakeRoutingModule
  ]
})
export class ShakeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrepeRoutingModule } from './crepe-routing.module';
import { CrepeComponent } from './crepe.component';


@NgModule({
  declarations: [CrepeComponent],
  imports: [
    CommonModule,
    CrepeRoutingModule
  ]
})
export class CrepeModule { }

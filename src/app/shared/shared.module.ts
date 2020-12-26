import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MaterialModule } from '@material/material.module';

import { CartPipe } from './pipes/cart.pipe';
import { DeleteRepeatsPipe } from './pipes/deleteRepeats.pipe';
import { RepeatNumberPipe } from './pipes/repeatNumberPipe.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CartPipe,
    DeleteRepeatsPipe,
    RepeatNumberPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CartPipe,
    DeleteRepeatsPipe,
    RepeatNumberPipe
  ]
})
export class SharedModule { }

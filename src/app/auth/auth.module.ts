import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { MaterialModule } from '@material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilContainerComponent } from './containers/perfil-container/perfil-container.component';


@NgModule({
  declarations: [
    AuthComponent,
    PerfilComponent,
    PerfilContainerComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgxAuthFirebaseUIModule,
    MaterialModule
  ]
})
export class AuthModule { }

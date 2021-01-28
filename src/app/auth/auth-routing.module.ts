import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilContainerComponent } from './containers/perfil-container/perfil-container.component';



const routes: Routes = [
  {
    path: '',
    component: PerfilContainerComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

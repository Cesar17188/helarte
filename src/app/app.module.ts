// módulos base de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// componentes de carga inicial
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

// módulo para carga de rutas
import { AppRoutingModule } from './app-routing.module';

// módulos del e-commerce
import { ShareModule } from '@shared/shared.module';
import { ContactoModule } from '@contacto/contacto.module';
import { CoreModule } from '@core/core.module';
import { CrepeModule } from '@crepe/crepe.module';
import { IcecreamModule } from '@icecream/icecream.module';
import { IngredientsModule } from '@ingredients/ingredients.module';
import { MaterialModule } from '@material/material.module';
import { CafeModule } from '@cafe/cafe.module';
import { ShakeModule } from '@shake/shake.module';
import { AuthModule } from '@auth/auth.module';
import { PageNotFoundRoutingModule } from './page-not-found/page-not-found-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShareModule,
    ContactoModule,
    CoreModule,
    CrepeModule,
    IcecreamModule,
    IngredientsModule,
    MaterialModule,
    CafeModule,
    ShakeModule,
    AuthModule,
    PageNotFoundRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

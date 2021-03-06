// módulos base de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { QuicklinkModule } from 'ngx-quicklink';

// componentes de carga inicial
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

// módulo para carga de rutas
import { AppRoutingModule } from './app-routing.module';

// módulos para el manejo de firebase

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

// módulos del e-commerce
import { SharedModule } from '@shared/shared.module';
import { ContactoModule } from '@contacto/contacto.module';
import { CoreModule } from '@core/core.module';
import { CrepeModule } from '@crepe/crepe.module';
import { IcecreamModule } from '@icecream/icecream.module';
import { IngredientsModule } from '@ingredients/ingredients.module';
import { MaterialModule } from '@material/material.module';
import { CafeModule } from '@cafe/cafe.module';
import { ShakeModule } from '@shake/shake.module';
import { ArepasModule } from '@arepas/arepas.module';
import { AuthModule } from '@auth/auth.module';
import { PageNotFoundRoutingModule } from './page-not-found/page-not-found-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    ContactoModule,
    CoreModule,
    CrepeModule,
    IcecreamModule,
    IngredientsModule,
    MaterialModule,
    CafeModule,
    ShakeModule,
    ArepasModule,
    AuthModule,
    PageNotFoundRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    QuicklinkModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

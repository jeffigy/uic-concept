import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appStoreModule } from 'src/store/AppStoreModule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ...appStoreModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

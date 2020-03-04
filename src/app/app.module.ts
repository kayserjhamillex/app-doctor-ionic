import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

// para los formularios
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';
// import { CitasviewPipe } from './doctor/citasview.pipe';


@NgModule({
  declarations:
  [
    AppComponent,
    CitasviewPipe
  ],
  entryComponents: [],
  imports:
  [
    FormsModule,
    // Toast,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

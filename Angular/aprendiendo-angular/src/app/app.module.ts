import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import{ZapatillasComponent} from './zapatillas/zapatillas.component';

@NgModule({
  declarations: [
    AppComponent,
    Videojuegocomponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
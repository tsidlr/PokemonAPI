import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-design/material.modules';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PokemonCardComponent } from './home/pokemon-card/pokemon-card.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonCardComponent,
    HeaderComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

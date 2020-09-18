import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AppReduceMap } from './store/reducers/app.reduce-map';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from './store/effects/users.effect';
import { ConfigEffects } from './store/effects/config.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UsersModule } from './core/users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    UsersModule,
    StoreModule.forRoot(AppReduceMap),
    EffectsModule.forRoot([UsersEffect, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

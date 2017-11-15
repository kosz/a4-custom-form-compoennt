import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RegisterModule } from '../app/register/register.module';

import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';


import { StoreModule } from '@ngrx/store';
import { registerReducer } from './register/register.reducer';
import { incrementReducer } from './alert/increment.reducer';
import { counterReducer } from './alert/counter/counter.reducer';
import { backendReducer } from './alert/counter/backend.reducer';

import { MyinputModule } from './myinput/myinput.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OutputScreenModule } from './output-screen/output-screen.module';
import { AlertComponent } from './alert/alert.component';
import { CounterComponent } from './alert/counter/counter.component';
import { AppEffectsModule } from './app-effects';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CounterComponent,
    //MyformComponent,
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    HttpModule,
    OutputScreenModule,
    AppEffectsModule,
    //MyinputModule,
    StoreModule.provideStore({ 
      register: registerReducer, 
      increment: incrementReducer,
      counter: counterReducer, 
      backend: backendReducer, 
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { RegisterModule } from '../app/register/register.module';

import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';


import { StoreModule } from '@ngrx/store';
import { registerReducer } from './register/register.reducer';

import { MyinputModule } from './myinput/myinput.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OutputScreenModule } from './output-screen/output-screen.module';


@NgModule({
  declarations: [
    AppComponent,
    //MyformComponent,
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    HttpModule,
    OutputScreenModule,
    //MyinputModule,
    StoreModule.provideStore({ register: registerReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

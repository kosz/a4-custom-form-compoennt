import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RegisterModule } from '../app/register/register.module';

import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { MyinputComponent } from './myinput/myinput.component';

import { KeysPipe } from './myinput/keys.pipe';

import { StoreModule } from '@ngrx/store';
import { registerReducer } from './register/register.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    KeysPipe,
    MyinputComponent
  ],
  imports: [
    BrowserModule,
    RegisterModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore({ register: registerReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

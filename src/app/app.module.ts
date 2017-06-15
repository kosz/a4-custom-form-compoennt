import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyformComponent } from './myform/myform.component';
import { MyinputComponent } from './myinput/myinput.component';

import { KeysPipe } from './myinput/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MyformComponent,
    KeysPipe,
    MyinputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

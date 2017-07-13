import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyinputComponent } from './myinput.component';
import { KeysPipe } from './keys.pipe';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MyinputComponent,
    KeysPipe,
  ],
  exports: [
    MyinputComponent,
  ]
})
export class MyinputModule { }

import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { BackendEffects } from 'app/alert/counter/backend.effects'; 

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.run(BackendEffects),
  ]
})
export class AppEffectsModule { }


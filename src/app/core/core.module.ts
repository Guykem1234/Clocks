import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './ngrxState/reducers';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './ngrxState/effects/core.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCore.coreFeatureKey,
      fromCore.reducer,
      { metaReducers: [] }
    ),
    EffectsModule.forFeature([CoreEffects]),
  ],
})
export class CoreModule { }

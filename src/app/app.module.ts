import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClockListComponent } from './shared/clock-list/clock-list.component';
import { ClockComponent } from './shared/clock/clock.component';
import { SelectorComponent } from './shared/selector/selector.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/ngrxState/mainAppReducers';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AnalogClockComponent } from './shared/analog-clock/analog-clock.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DigitalClockComponent } from './shared/digital-clock/digital-clock.component';
import { DigitalDisplayPipe } from './shared/pipes/digitalDisplayPipe/digital-display.pipe';
import { NzSelectModule } from 'ng-zorro-antd/select';

registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    ClockListComponent,
    ClockComponent,
    SelectorComponent,
    AnalogClockComponent,
    DigitalClockComponent,
    DigitalDisplayPipe,
  ],
  imports: [
    NzSelectModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    FormsModule,
    CoreModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

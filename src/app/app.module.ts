import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InitComponent } from './components/options/init/init.component';
import { ChangesComponent } from './components/options/changes/changes.component';
import { StoreModule,  } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { logReducer } from './store/logger.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LogEffects } from './store/looger.effects';
import { LoogerComponent } from './components/footer/looger/looger.component';
import { SimpleComponent } from './components/options/init/simple/simple.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitComponent,
    ChangesComponent,
    LoogerComponent,
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ log: logReducer }),
    EffectsModule.forRoot([LogEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

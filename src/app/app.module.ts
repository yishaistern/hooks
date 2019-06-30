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
import { ParentComponent } from './components/options/init/parent/parent/parent.component';
import { SonComponent } from './components/options/init/parent/son/son.component';
import { ParentForComponent } from './components/options/init/parentFor/parent-for.component';
import { SonLopComponent } from './components/options/init/parentFor/son/son.component';
import { SimpleChangesComponent } from './components/options/changes/simple-changes/simple-changes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitComponent,
    ChangesComponent,
    LoogerComponent,
    SimpleComponent,
    ParentComponent,
    SonComponent,
    ParentForComponent,
    SonLopComponent,
    SimpleChangesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ log: logReducer }),
    EffectsModule.forRoot([LogEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SimpleComponent,
    ParentComponent,
    ParentForComponent,
    SimpleChangesComponent
  ]
})
export class AppModule { }

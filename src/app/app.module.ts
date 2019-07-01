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
import { SimpleParentComponent } from './components/options/changes/simple-parent/simple-parent.component';
import { SimpleSonComponent } from './components/options/changes/simple-parent/simple-son/simple-son.component';
import { ComplexParentComponent } from './components/options/changes/complex-parent/complex-parent.component';
import { ComplexSonComponent } from './components/options/changes/complex-parent/complex-son/complex-son.component';
import { ComplexInteractionComponent } from './components/options/changes/complex-interaction/complex-interaction.component';
import { InteractionSonComponent } from './components/options/changes/complex-interaction/interaction-son/interaction-son.component';
import { DoCheckComponent } from './components/options/do-check/do-check.component';
import { SimpleCheckComponent } from './components/options/do-check/simple-check/simple-check.component';
import { FormsModule } from '@angular/forms';
import { ParentCheckComponent } from './components/options/do-check/parent-check/parent-check.component';
import { ResizeCheckComponent } from './components/options/do-check/resize-check/resize-check.component';
import { SonCheckComponent } from './components/options/do-check/parent-check/son-check/son-check.component';
import { ParentResizeCheckComponent } from './components/options/do-check/parent-resize-check/parent-resize-check.component';
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
    SimpleChangesComponent,
    SimpleParentComponent,
    SimpleSonComponent,
    ComplexParentComponent,
    ComplexSonComponent,
    ComplexInteractionComponent,
    InteractionSonComponent,
    DoCheckComponent,
    SimpleCheckComponent,
    ParentCheckComponent,
    ResizeCheckComponent,
    SonCheckComponent,
    ParentResizeCheckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ log: logReducer }),
    EffectsModule.forRoot([LogEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SimpleComponent,
    ParentComponent,
    ParentForComponent,
    SimpleChangesComponent,
    SimpleParentComponent,
    ComplexParentComponent,
    ComplexInteractionComponent,
    SimpleCheckComponent,
    ParentCheckComponent,
    ResizeCheckComponent
  ],
})
export class AppModule { }

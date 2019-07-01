import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/options/init/init.component';
import { ChangesComponent } from './components/options/changes/changes.component';
import { DoCheckComponent } from './components/options/do-check/do-check.component';
import { AfterViewComponent } from './components/options/after-view/after-view.component';

const routes: Routes = [
  {
    path: 'onInit',
    component: InitComponent
  }, {
    path: 'onChanges',
    component: ChangesComponent
  }, {
    path: 'doCheck',
    component: DoCheckComponent
  }, {
    path: 'afterView',
    component: AfterViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

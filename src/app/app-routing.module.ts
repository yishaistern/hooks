import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/options/init/init.component';
import { ChangesComponent } from './components/options/changes/changes.component';

const routes: Routes = [
  {
    path: 'init',
    component: InitComponent
  }, {
    path: 'change',
    component: ChangesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

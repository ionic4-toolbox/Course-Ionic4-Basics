import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgIfPageComponent } from './ng-if.page';

const routes: Routes = [
  { path: '', component: NgIfPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgIfRoutingModule2 { }

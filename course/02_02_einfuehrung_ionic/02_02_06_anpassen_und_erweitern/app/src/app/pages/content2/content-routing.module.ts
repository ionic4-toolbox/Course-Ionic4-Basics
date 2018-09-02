import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentPage2 } from './content.page';

const routes: Routes = [
  { path: '', component: ContentPage2 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule2 { }

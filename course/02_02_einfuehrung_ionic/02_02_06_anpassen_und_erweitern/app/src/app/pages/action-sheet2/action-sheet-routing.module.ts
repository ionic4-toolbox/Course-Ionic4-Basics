import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionSheetPageComponent2 } from './action-sheet.page';

const routes: Routes = [
  { path: '', component: ActionSheetPageComponent2 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionSheetRoutingModule2 { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionSheetControllerPage } from './action-sheet-controller.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetControllerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActionSheetControllerPage]
})
export class ActionSheetControllerPageModule {}

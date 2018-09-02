import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PickerControllerPage } from './picker-controller.page';

const routes: Routes = [
  {
    path: '',
    component: PickerControllerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PickerControllerPage]
})
export class PickerControllerPageModule {}

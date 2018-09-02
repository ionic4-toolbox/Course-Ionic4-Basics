import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopovercontrollerPage } from './popovercontroller.page';

const routes: Routes = [
  {
    path: '',
    component: PopovercontrollerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopovercontrollerPage]
})
export class PopovercontrollerPageModule {}

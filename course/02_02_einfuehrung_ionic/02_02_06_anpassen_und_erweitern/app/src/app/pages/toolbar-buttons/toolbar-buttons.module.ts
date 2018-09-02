import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToolbarButtonsPage } from './toolbar-buttons.page';

const routes: Routes = [
  {
    path: '',
    component: ToolbarButtonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToolbarButtonsPage]
})
export class ToolbarButtonsPageModule {}

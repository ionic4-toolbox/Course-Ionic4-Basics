import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NavSetRootPage } from './nav-set-root.page';

const routes: Routes = [
  {
    path: '',
    component: NavSetRootPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NavSetRootPage]
})
export class NavSetRootPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RouterOutletPage } from './router-outlet.page';

const routes: Routes = [
  {
    path: '',
    component: RouterOutletPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RouterOutletPage]
})
export class RouterOutletPageModule {}

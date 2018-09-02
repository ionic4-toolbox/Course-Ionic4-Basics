import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollContentPage } from './infinite-scroll-content.page';

const routes: Routes = [
  {
    path: '',
    component: InfiniteScrollContentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfiniteScrollContentPage]
})
export class InfiniteScrollContentPageModule {}

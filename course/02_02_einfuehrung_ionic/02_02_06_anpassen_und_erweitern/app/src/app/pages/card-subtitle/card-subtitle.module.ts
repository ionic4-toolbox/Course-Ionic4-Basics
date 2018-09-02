import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardSubtitlePage } from './card-subtitle.page';

const routes: Routes = [
  {
    path: '',
    component: CardSubtitlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardSubtitlePage]
})
export class CardSubtitlePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { BadgePage } from './badge.page';
import { BadgeRoutingModule } from './badge-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BadgeRoutingModule,
    IonicModule
  ],
  declarations: [BadgePage]
})
export class BadgePageModule { }

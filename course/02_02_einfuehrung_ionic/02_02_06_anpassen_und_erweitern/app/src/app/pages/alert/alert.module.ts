import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { AlertPage } from './alert.page';
import { AlertRoutingModule } from './alert-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AlertRoutingModule
  ],
  declarations: [AlertPage]
})
export class AlertPageModule { }

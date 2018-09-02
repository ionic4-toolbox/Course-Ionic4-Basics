import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { LoadingPage } from './loading.page';
import { LoadingRoutingModule } from './loading-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoadingRoutingModule
  ],
  declarations: [LoadingPage]
})
export class LoadingPageModule { }

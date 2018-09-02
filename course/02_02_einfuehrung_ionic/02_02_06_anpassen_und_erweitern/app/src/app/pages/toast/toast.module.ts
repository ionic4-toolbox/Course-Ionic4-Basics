import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ToastPage } from './toast.page';
import { ToastRoutingModule } from './toast-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ToastRoutingModule
  ],
  declarations: [ToastPage]
})
export class ToastPageModule { }

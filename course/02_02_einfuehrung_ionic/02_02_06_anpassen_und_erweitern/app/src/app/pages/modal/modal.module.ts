import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ModalPage } from './modal.page';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalPageToPresent } from './modal-page-to-present';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    ModalRoutingModule
  ],
  declarations: [
    ModalPage,
    ModalPageToPresent
  ],
  entryComponents: [
    ModalPageToPresent
  ]
})
export class ModalPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ButtonPage } from './button.page';
import { ButtonRoutingModule } from './button-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonRoutingModule,
    IonicModule
  ],
  declarations: [ButtonPage]
})
export class ButtonPageModule { }

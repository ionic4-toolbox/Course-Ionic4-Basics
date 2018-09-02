import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ShowHideWhenComponent } from './show-hide-when.page';
import { ShowHideWhenRoutingModule2 } from './show-hide-when-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShowHideWhenRoutingModule2
  ],
  declarations: [ShowHideWhenComponent]
})
export class ShowHideWhenModule2 { }

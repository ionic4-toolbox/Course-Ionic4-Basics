import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ActionSheetPageComponent2 } from './action-sheet.page';
import { ActionSheetRoutingModule2 } from './action-sheet-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ActionSheetRoutingModule2
  ],
  declarations: [ActionSheetPageComponent2]
})
export class ActionSheetPageModule2 { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BasicInputsPageComponent } from './basic-inputs.page';
import { BasicInputsPageRoutingModule } from './basic-inputs-routing.module';

@NgModule({
  imports: [
    BasicInputsPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [BasicInputsPageComponent]
})
export class BasicInputsPageModule2 {}

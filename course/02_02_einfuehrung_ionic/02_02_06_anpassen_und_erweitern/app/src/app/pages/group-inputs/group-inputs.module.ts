import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GroupInputsPageComponent } from './group-inputs.page';
import { GroupInputsPageRoutingModule2 } from './group-inputs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GroupInputsPageRoutingModule2,
    IonicModule
  ],
  declarations: [GroupInputsPageComponent]
})
export class GroupInputsPageModule2 {}

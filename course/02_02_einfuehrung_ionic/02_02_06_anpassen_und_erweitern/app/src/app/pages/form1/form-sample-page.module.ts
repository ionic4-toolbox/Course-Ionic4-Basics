import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormSamplePageComponent } from './form-sample.page';
import { FormSamplePageRoutingModule2 } from './form-sample-page-routing.module';

@NgModule({
  imports: [
    FormSamplePageRoutingModule2,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [FormSamplePageComponent]
})
export class FormSamplePageModule2 {}

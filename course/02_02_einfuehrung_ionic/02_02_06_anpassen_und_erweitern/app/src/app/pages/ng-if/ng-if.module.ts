import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgIfPageComponent } from './ng-if.page';
import { NgIfRoutingModule2 } from './ng-if-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgIfRoutingModule2,
    IonicModule
  ],
  declarations: [NgIfPageComponent]
})
export class NgIfModule2 { }

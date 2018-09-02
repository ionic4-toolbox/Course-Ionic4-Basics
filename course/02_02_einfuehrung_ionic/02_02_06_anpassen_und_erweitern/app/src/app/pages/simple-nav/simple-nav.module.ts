import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { SimpleNavPageComponent } from './simple-nav.component';
import { SimpleNavRoutingModule2 } from './simple-nav-routing.module';


@NgModule({
  declarations: [
    SimpleNavPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SimpleNavRoutingModule2
  ]
})
export class SimpleNavModule2 {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { StaticTabsPageComponent } from './static-tabs.component';
import { StaticTabsRoutingModule } from './static-tabs-routing.module';


@NgModule({
  declarations: [
    StaticTabsPageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    StaticTabsRoutingModule
  ]
})
export class StaticTabsModule2 {}

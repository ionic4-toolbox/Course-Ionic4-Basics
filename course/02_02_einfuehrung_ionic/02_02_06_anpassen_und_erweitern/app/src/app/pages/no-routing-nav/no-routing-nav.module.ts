import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { NoRoutingNavPageComponent } from './no-routing-nav.component';
import { NoRoutingNavRoutingModule2 } from './no-routing-nav-routing.module';

import { PageOne } from './pages/page-one';
import { PageTwo } from './pages/page-two';
import { PageThree } from './pages/page-three';

@NgModule({
  imports: [
    CommonModule,
    NoRoutingNavRoutingModule2,
    IonicModule,
  ],
  declarations: [
    NoRoutingNavPageComponent,
    PageOne,
    PageTwo,
    PageThree
  ],
  entryComponents: [
    PageOne,
    PageTwo,
    PageThree
  ]
})
export class NoRoutingNavModule2 { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SegmentPage } from './segment.page';
import { SegmentRoutingModule } from './segment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SegmentRoutingModule,
    IonicModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule { }

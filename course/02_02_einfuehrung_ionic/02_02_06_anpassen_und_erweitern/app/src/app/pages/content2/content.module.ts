import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ContentPage2 } from './content.page';
import { ContentRoutingModule2 } from './content-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ContentRoutingModule2
  ],
  declarations: [ContentPage2]
})
export class ContentPageModule2 { }

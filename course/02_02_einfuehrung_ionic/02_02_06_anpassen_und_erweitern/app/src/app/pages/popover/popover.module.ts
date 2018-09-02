import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { PopoverPage } from "./popover.page";
import { PopoverRoutingModule } from "./popover-routing.module";
import { PopoverPageToPresent } from "./popover-page-to-present";

@NgModule({
  imports: [CommonModule, IonicModule.forRoot(), PopoverRoutingModule],
  declarations: [PopoverPage, PopoverPageToPresent],
  providers: [],
  entryComponents: [PopoverPageToPresent]
})
export class PopoverPageModule {}

import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';
import { PopoverPageToPresent } from './popover-page-to-present';

@Component({
  selector: 'app-popover-page',
  template: './popover.page.html'
})
export class PopoverPage {

  constructor(private popoverController: PopoverController) {
  }

  async clickMe(event?: Event) {
    /*
    const popover = await this.popoverController.create({
      component: PopoverPageToPresent,
      ev: event
    });
    return popover.present();
    */
  }

}

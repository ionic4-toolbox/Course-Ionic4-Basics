import { Component, ViewEncapsulation } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalPageToPresent } from './modal-page-to-present';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalPage {

  constructor(private modalController: ModalController) {
  }

  async clickMe() {
    const modal = await this.modalController.create({
      component: ModalPageToPresent
    });
    return modal.present();
  }
}

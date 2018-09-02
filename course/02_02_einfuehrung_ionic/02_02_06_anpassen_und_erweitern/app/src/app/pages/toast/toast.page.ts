import { Component } from '@angular/core';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast-page',
  templateUrl: './toast.page.html'
})
export class ToastPage {

  constructor(private toastController: ToastController) {

  }

  async clickMe() {
    const toast = await this.toastController.create({
      closeButtonText: 'close dat toast',
      duration: 1000,
      message: 'Howdy ho toasty neighbor',
      position: 'bottom'
    });
    toast.present();
  }

}

import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert-page',
  templateUrl: 'alert.page.html' 
})
export class AlertPage {

  constructor(private alertController: AlertController) {}

  async clickMe() {
    const alert = await this.alertController.create({
      header: 'ohhhh snap',
      message: 'Ive been injected via Angular keeping the old api',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel',
          handler: () => {
            // console.log('cancel');
          }
        },
        {
          text: 'Okay',
          role: 'Okay',
          handler: () => {
            // console.log('okay');
          }
        }
      ]
    });
    return alert.present();
  }

}

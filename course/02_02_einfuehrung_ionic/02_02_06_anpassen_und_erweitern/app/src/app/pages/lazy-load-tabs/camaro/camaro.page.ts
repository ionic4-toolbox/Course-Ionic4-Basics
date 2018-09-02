import { Component } from '@angular/core';


@Component({
  selector: 'camaro-page',
  template: `
    <ion-header>
        <ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons>
        <ion-title>Camaro</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      Camaro
    </ion-content>
  `
})
export class CamaroPage {}

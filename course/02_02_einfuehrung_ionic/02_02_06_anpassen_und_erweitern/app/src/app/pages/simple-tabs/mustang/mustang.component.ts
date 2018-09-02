import { Component } from '@angular/core';


@Component({
  selector: 'app-mustang',
  template: `
    <ion-header>
        <ion-toolbar><ion-buttons slot="start"><ion-menu-button></ion-menu-button></ion-buttons>
        <ion-title>Mustang</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      Mustang
    </ion-content>
  `
})
export class MustangComponent {}

import { Component, OnInit } from "@angular/core";
import { Platform, ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-action-sheet",
  templateUrl: "./action-sheet.page.html",
  styleUrls: ["./action-sheet.page.scss"]
})
export class ActionSheetPage1 implements OnInit {
  constructor(
    public platform: Platform,
    public actionSheetController: ActionSheetController
  ) {
    console.log('ActionSheetPage:constructor');
  }

  ngOnInit() {
    console.log('ActionSheetPage:ngOnInit');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentBasic() {
    console.log('ActionSheetPage:presentBasic');

    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
  async presentIcons() {
    const actionSheetController = document.querySelector('ion-action-sheet-controller');
    await actionSheetController.componentOnReady();
    const actionSheetElement = await actionSheetController.create({
      header: "Albums",
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        role: 'selected',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    })
    await actionSheetElement.present();
  }
  
  async presentNoBackdropDismiss() {
    const actionSheetController = document.querySelector('ion-action-sheet-controller');
    await actionSheetController.componentOnReady();
    const actionSheetElement = await actionSheetController.create({
      backdropDismiss: false,
      buttons: [{
        text: 'Archive',
        handler: () => {
          console.log('Archive clicked');
        }
      }, {
        text: 'Destructive',
        role: 'destructive',
        handler: () => {
          console.log('Destructive clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheetElement.present();
  }
  
  async presentAlert() {
    const actionSheetController = document.querySelector('ion-action-sheet-controller');
    await actionSheetController.componentOnReady();
    const actionSheetElement = await actionSheetController.create({
      buttons: [{
        text: 'Open Alert',
        handler: () => {
          console.log('Open Alert clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheetElement.present();
  }
  
  async presentScroll() {
    const actionSheetController = document.querySelector('ion-action-sheet-controller');
    await actionSheetController.componentOnReady();
    const actionSheetElement = await actionSheetController.create({
      buttons: [
        {
          text: 'Add Reaction',
          handler: () => {
            console.log('Add Reaction clicked');
          }
        }, {
          text: 'Copy Text',
          handler: () => {
            console.log('Copy Text clicked');
          }
        }, {
          text: 'Share Text',
          handler: () => {
            console.log('Share Text clicked');
          }
        }, {
          text: 'Copy Link to Message',
          handler: () => {
            console.log('Copy Link to Message clicked');
          }
        }, {
          text: 'Remind Me',
          handler: () => {
            console.log('Remind Me clicked');
          }
        }, {
          text: 'Pin File',
          handler: () => {
            console.log('Pin File clicked');
          }
        }, {
          text: 'Star File',
          handler: () => {
            console.log('Star File clicked');
          }
        }, {
          text: 'Mark Unread',
          handler: () => {
            console.log('Mark Unread clicked');
          }
        }, {
          text: 'Edit Title',
          handler: () => {
            console.log('Edit Title clicked');
          }
        }, {
          text: 'Save Image',
          handler: () => {
            console.log('Save Image clicked');
          }
        }, {
          text: 'Copy Image',
          handler: () => {
            console.log('Copy Image clicked');
          }
        }, {
          text: 'Delete File',
          role: 'destructive',
          handler: () => {
            console.log('Delete File clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }
  
  async presentScrollNoCancel() {
    const actionSheetController = document.querySelector('ion-action-sheet-controller');
    await actionSheetController.componentOnReady();
    const actionSheetElement = await actionSheetController.create({
      buttons: [
        {
          text: 'Add Reaction',
          handler: () => {
            console.log('Add Reaction clicked');
          }
        }, {
          text: 'Copy Text',
          handler: () => {
            console.log('Copy Text clicked');
          }
        }, {
          text: 'Share Text',
          handler: () => {
            console.log('Share Text clicked');
          }
        }, {
          text: 'Copy Link to Message',
          handler: () => {
            console.log('Copy Link to Message clicked');
          }
        }, {
          text: 'Remind Me',
          handler: () => {
            console.log('Remind Me clicked');
          }
        }, {
          text: 'Pin File',
          handler: () => {
            console.log('Pin File clicked');
          }
        }, {
          text: 'Star File',
          handler: () => {
            console.log('Star File clicked');
          }
        }, {
          text: 'Mark Unread',
          handler: () => {
            console.log('Mark Unread clicked');
          }
        }, {
          text: 'Edit Title',
          handler: () => {
            console.log('Edit Title clicked');
          }
        }, {
          text: 'Save Image',
          handler: () => {
            console.log('Save Image clicked');
          }
        }, {
          text: 'Copy Image',
          handler: () => {
            console.log('Copy Image clicked');
          }
        }, {
          text: 'Delete File',
          role: 'destructive',
          handler: () => {
            console.log('Delete File clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }
  
  async presentCancelOnly() {
    const actionSheetController = document.querySelector('ion-action-sheet-controller');
    await actionSheetController.componentOnReady();
    const actionSheetElement = await actionSheetController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }
  
  async presentWithCssClass() {
    const actionSheetController = document.querySelector('ion-action-sheet-controller');
    await actionSheetController.componentOnReady();
    const actionSheetElement = await actionSheetController.create({
      header: "Custom Css Class",
      cssClass: "my-class my-custom-class",
      buttons: [
        {
          text: 'Test',
          role: 'test',
          cssClass: 'my-cancel-button my-custom-button customClass',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheetElement.present();
  }
}

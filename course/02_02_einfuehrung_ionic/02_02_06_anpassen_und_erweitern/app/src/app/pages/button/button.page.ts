import { Component, OnInit, ViewChild } from '@angular/core';
import { Button } from '@ionic/angular';

@Component({
  selector: "app-button",
  templateUrl: "./button.page.html",
  styleUrls: ["./button.page.scss"]
})
export class ButtonPage implements OnInit {
  dynamicColor = 'primary';
  isDisabled = true;

  @ViewChild(Button) button: Button;

  ngOnInit() {
    console.log(this.button);
  }

  disableClick() {
    console.log('Clicked disabled button');
  }

  toggleColor() {
    if (this.dynamicColor === 'primary') {
      this.dynamicColor = 'secondary';
    } else if (this.dynamicColor === 'secondary') {
      this.dynamicColor = 'danger';
    } else {
      this.dynamicColor = 'primary';
    }
  }
}

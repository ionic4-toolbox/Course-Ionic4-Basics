import { Component, OnInit, ViewChild } from '@angular/core';
import { Badge } from '@ionic/angular';

@Component({
  selector: 'app-badge-page',
  templateUrl: './badge.page.html'
})
export class BadgePage implements OnInit {
  dynamicColor = 'primary';

  @ViewChild(Badge) badge: Badge;

  ngOnInit() {
    console.log(this.badge);
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

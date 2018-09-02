import { Component } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: "./content.page.html",
  styleUrls: ["./content.page.scss"]
})
export class ContentPage2 {
  constructor() {}

  toggleFullscreen(content) {
    content.fullscreen = !content.fullscreen;
    console.log('content.fullscren =', content.fullscreen);
  }

  toggleDisplay(el) {
    el.style.display = !el.style.display ? 'none' : null;
  }
}

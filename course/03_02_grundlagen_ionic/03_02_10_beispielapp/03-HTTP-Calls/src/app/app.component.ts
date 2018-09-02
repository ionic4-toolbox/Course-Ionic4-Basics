import { Component }                        from '@angular/core';

import { Platform }                         from '@ionic/angular';
import { SplashScreen }                     from '@ionic-native/splash-screen/ngx';
import { StatusBar }                        from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
      { title: 'Home',          url: '/home',       icon: 'home' },
      { title: 'Tabs',          url: '/tabs',       icon: 'list'},
      { title: 'Data',          url: '/data',       icon: 'list'},
      { title: 'Details',       url: '/details',    icon: 'list'},
      { title: 'Planets',       url: '/planets',    icon: 'list'},
      { title: 'People',        url: '/people',     icon: 'list'},
    ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
 
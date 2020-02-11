import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { AuthGuardService } from './services/auth-guard.service';
import { DoctorService } from './services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private doctorService: DoctorService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.doctorService.autenticationState.subscribe(state => {
        console.log('auth changed:', state);
        if (state) {
          this.router.navigate(['/doctor', 'home']);
        } else {
          this.router.navigate(['/login']);
        }
      });
    });
  }
}

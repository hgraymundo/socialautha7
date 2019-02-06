import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider} from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})

export class AuthManagerService {

  user: SocialUser;
  loggedIn: boolean;

  constructor( private authService: AuthService, private router: Router ) { }

  signInWithFB() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then((userData) => {
        this.user = userData;
        this.router.navigate(['/profile']);
    })
  }

  getAuthStatus() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    return this.user;
  }

  signOut(): void {
      this.authService.signOut();
      this.router.navigate(['/login']);
  }
}

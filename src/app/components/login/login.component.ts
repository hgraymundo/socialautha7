import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from '../../services/auth-manager.service';
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   user: SocialUser;

  constructor( private ams: AuthManagerService) { }

  ngOnInit() {}

  authFB():void {
    this.ams.signInWithFB();
    this.user = this.ams.getAuthStatus();
    console.log(this.user);
  }
}

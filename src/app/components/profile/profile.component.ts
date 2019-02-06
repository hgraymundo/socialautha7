import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from '../../services/auth-manager.service';
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: SocialUser;
  constructor(public authManager: AuthManagerService) { }

  ngOnInit() {
    this.user = this.authManager.getAuthStatus();
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthManagerService } from '../../services/auth-manager.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authManager: AuthManagerService) { }

  ngOnInit() {
  }

  logout() {
    this.authManager.signOut();
  }

}

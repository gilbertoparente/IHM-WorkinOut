import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User } from '../services/authentication.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  currentUser: User;

  constructor(private authenticationService: AuthenticationService) {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.getCurrentUser();
  }

}

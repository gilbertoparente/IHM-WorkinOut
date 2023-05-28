import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User } from '../services/authentication.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.page.html',
  styleUrls: ['./planos.page.scss'],
})
export class PlanosPage implements OnInit {
  users: User[];
  
  constructor(private authenticationService: AuthenticationService) {
    this.users = [];
  }

  ngOnInit() {
    this.users = this.authenticationService.getUsers();
  }

}

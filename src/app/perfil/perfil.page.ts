import { Component, OnInit } from '@angular/core';
import { AuthenticationService, User } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private authService: AuthenticationService, private route: Router) 
  { }

  public user!: User | null;


  ngOnInit() {
    this.user = this.authService.getUsers()[0];
  }

  sair() {
    this.route.navigate(['/login'])
  }

  alterInfo() {
    this.route.navigate(['/register'])
  }

}

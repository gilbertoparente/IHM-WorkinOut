import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  toHome() {
    const isLoggedIn = this.authService.login(this.email, this.password);
    if (isLoggedIn) {
      const currentUser = this.authService.getCurrentUser();
      if (currentUser) {
        const userName = currentUser.nome;
        console.log('Logged-in user name:', userName);
      }
      this.router.navigateByUrl('/tabs');
    } else {
      console.log('Authentication failed');
    }
  }

  toRegister() {
    this.router.navigate(['/register']);
  }
}
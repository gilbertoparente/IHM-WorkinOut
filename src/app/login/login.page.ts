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
      this.router.navigateByUrl('/tabs');
    } else {
      // Handle invalid login credentials
    }
  }

  toRegister() {
    this.router.navigate(['/register']);
  }
}

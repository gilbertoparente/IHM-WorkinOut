import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage {
  user: User = {
    nome: '',
    email: '',
    password: '',
    idade: 0,
    peso: 0,
    altura: 0,
    condFisica: 5,
    duracaoPref: 15,
    diasTreino: '',
    foco: '',
  };

  constructor(
    private router: Router,
    @Inject(AuthenticationService) private authService: AuthenticationService
  ) {}

  cancelar() {
    this.router.navigate(['/login']);
  }

  submeter() {
    this.authService.insertUser(this.user);
    this.router.navigateByUrl('/tabs');
  }
}


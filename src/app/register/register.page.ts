import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private route: Router) { }

  cancelar() {
    this.route.navigate(['/login'])
  }

  submeter(){
    this.route.navigateByUrl('/tabs');
  }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.page.html',
  styleUrls: ['./planos.page.scss'],
})
export class PlanosPage implements OnInit {

  constructor(private route: Router) { }

  criarPlanos() {
    this.route.navigate(['/criar-planos'])
  }
  
  ngOnInit() {
  }

}

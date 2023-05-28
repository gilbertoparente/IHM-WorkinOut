import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-planos',
  templateUrl: './criar-planos.page.html',
  styleUrls: ['./criar-planos.page.scss'],
})
export class CriarPlanosPage implements OnInit {

  constructor(private route: Router ) { }

  resumoPlanos() {
    this.route.navigate(['/planos-resumo'])
  }

  ngOnInit() {
  }

}

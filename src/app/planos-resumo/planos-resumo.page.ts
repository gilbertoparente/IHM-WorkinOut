import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planos-resumo',
  templateUrl: './planos-resumo.page.html',
  styleUrls: ['./planos-resumo.page.scss'],
})
export class PlanosResumoPage implements OnInit {

  constructor(private route: Router) { }

  guardarPlano() {
    this.route.navigate(['/planos'])
  }

  cancelarplano() {
    this.route.navigate(['/inicio'])
  }

  ngOnInit() {
  }

}

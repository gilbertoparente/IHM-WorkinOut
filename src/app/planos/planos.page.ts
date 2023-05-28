import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface planos {
  [key: string]: {
    id: string;
    title: string;
    Categoria: string;
    tempo: string
   
  };
};


@Component({
  selector: 'app-planos',
  templateUrl: './planos.page.html',
  styleUrls: ['./planos.page.scss'],
})
export class PlanosPage implements OnInit {

  public planos: planos;

  constructor(private route: Router) {
    this.planos = {}
  }
   
     ngOnInit() {

      
      fetch('./assets/planos.json')
        .then(res => res.json())
        .then(json => {
          this.planos = json;
        });
  
    }
    
  criarPlanos() {
    this.route.navigate(['/criar-planos'])
  }
  


}

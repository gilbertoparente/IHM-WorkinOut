import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



interface Planos {
  menu: string;
  categoria: string;
  subCategoria: string;
  nome: string;
  duracao: string;
  exercicios: string[];
}

@Component({
  selector: 'app-treinar',
  templateUrl: './treinar.page.html',
  styleUrls: ['./treinar.page.scss'],
})
export class TreinarPage implements OnInit {
  public planos: Planos[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    fetch('./assets/planos.json')
      .then(res => res.json())
      .then(data => {
        this.planos = data.planos;
      })
      .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
      });
  }

  getVideoUrl(categoria: string): SafeResourceUrl {
    if (categoria === 'Alongamentos') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4-4f10fL1pw');
    } else if (categoria === 'Category 1') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else if (categoria === 'Category 2') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    }    
    else {
      return '';
    }
  }
  
}

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface SubCategoria {
  nome: string;
  duracao: string;
  exercicios: string[];
}

interface Planos {
  menu: string;
  categoria: string;
  subCategoria: SubCategoria[];
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

  getVideoUrl(subcategoria: SubCategoria): SafeResourceUrl {
    if (subcategoria.nome === 'Alongamentos') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4-4f10fL1pw');
    } else if (subcategoria.nome === 'Ioga') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else if (subcategoria.nome === 'Musculação') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else if (subcategoria.nome === 'Cardio') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else if (subcategoria.nome === 'Resistência') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else {
      return '';
    }
  }

 
  
}

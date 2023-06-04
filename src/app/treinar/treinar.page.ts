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
    fetch('./assets/criar-planos.json')
      .then(res => res.json())
      .then(data => {
        this.planos = data.planos;
      })
      .catch(error => {
        console.error('Erro ao carregar o JSON:', error);
      });
  }

  getVideoUrl(subcategory: any): SafeResourceUrl {
    if (subcategory.categoria === 'Alongamentos') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/4-4f10fL1pw');
    } else if (subcategory.categoria === 'Ioga') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else if (subcategory.categoria === 'Musculação') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else if (subcategory.categoria === 'Cardio') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else if (subcategory.categoria === 'Resistência') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/q2NZyW5EP5A');
    } else {
      return '';
    }
  }
  
  
}

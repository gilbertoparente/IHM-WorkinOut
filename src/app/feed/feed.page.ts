import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  public publicacoes!: any[];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ionViewDidEnter() {
    this.carregarPublicacoes();
  }

  carregarPublicacoes() {
    const url = 'https://api.example.com/feed'; //substituir pela api 

    this.http.get<any[]>(url).subscribe(data => {
      this.publicacoes = data;
    }, error => {
      console.log('Erro ao carregar as publicações', error);
    });
  }
}
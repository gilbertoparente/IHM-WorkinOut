import { Component, OnInit } from '@angular/core';

interface FeedItem {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public publicacoes: FeedItem[] = [
    {
      title: 'Metas de rendimento',
      description: 'Mr. Sports aconcelha as seguintes metas',
      image: '../../assets/feedtreino1.png',
      author: 'Mr. Sports',
      date: '2023-06-25'
    },
    {
      title: 'Desporto e saúde',
      description: 'Desporto e saúde para todos',
      image: '../../assets/feedtreino3.png',
      author: 'Mr. Sports',
      date: '2023-02-25'
    },
    {
      title: 'Desporto',
      description: '',
      image: '../../assets/feedtreino4.png',
      author: 'Mr. Sports',
      date: '2023-05-25'
    },
    {
      title: 'Fitness Women',
      description: 'Descrição  2',
      image: '../../assets/feedtreino2.png',
      author: 'Mrs. Lady',
      date: '2022-05-24'
    }
    // Adicione mais itens ao feedData conforme necessário
  ];

  constructor() {}

  ngOnInit(): void {
  }
}

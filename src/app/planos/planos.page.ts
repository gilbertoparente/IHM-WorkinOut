import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


interface Categories {
  [key: string]: {
    name: string;
    subcategories: [];
  };
};

@Component({
  selector: 'app-planos',
  templateUrl: './planos.page.html',
  styleUrls: ['./planos.page.scss'],
}) 

export class PlanosPage implements OnInit {

  private _storage: Storage | null = null;
  hasWorkoutPlan: boolean = false;

  public dataCategories: Categories;
  showSubcategories: { [category: string]: boolean } = {};
  selectedSubcategories: { [category: string]: { [subcategory: string]: boolean } } = {};

  constructor(private route: Router, private storage: Storage) {
    this.init();
    this.dataCategories = {}
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async ngOnInit() {
    const workoutPlan = await this._storage?.get('workoutPlan');
    if(workoutPlan) {
      this.hasWorkoutPlan = true;
    }

    fetch('./assets/categorias.json')
      .then(res => res.json())
      .then(json => {
        this.dataCategories = json;
      });
  }

  criarPlanos() {
    this.route.navigate(['/criar-planos'])
  }

  toggleSubcategories(category: string) {
    this.showSubcategories[category] = !this.showSubcategories[category];
    if (this.showSubcategories[category]) {
      this.selectedSubcategories[category] = {};
    } else {
      delete this.selectedSubcategories[category];
    }
  }

}

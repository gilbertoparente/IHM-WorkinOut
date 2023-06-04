import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Subcategory {
  name: string;
  exercises: string[];
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

@Component({
  selector: 'app-editar-planos',
  templateUrl: './editar-planos.page.html',
  styleUrls: ['./editar-planos.page.scss'],
})
export class EditarPlanosPage {
  dataCategories: Category[] = [];
  selectedCategory: Category | null = null;
  selectedSubcategory: Subcategory | null = null;
  availableExercises: { name: string; isSelected: boolean }[] = [];
  workoutDuration: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ionViewWillEnter() {
    this.loadCategories();
  }

  loadCategories() {
    this.http.get<{ categories: Category[] }>('./assets/criar-planos.json').subscribe(
      (data) => {
        this.dataCategories = data.categories;
        this.selectedCategory = null;
        this.selectedSubcategory = null;
        this.availableExercises = [];
        this.workoutDuration = 0;
      },
      (error) => {
        console.error('Error loading categories:', error);
      }
    );
  }

  onCategoryChange() {
    this.selectedSubcategory = null;
    this.availableExercises = [];
  }

  onSubcategoryChange() {
    if (this.selectedSubcategory) {
      this.availableExercises = this.selectedSubcategory.exercises.map((exercise) => ({
        name: exercise,
        isSelected: false,
      }));
    } else {
      this.availableExercises = [];
    }
  }

  saveChangesLocally(updatedData: any) {
    const jsonData = JSON.stringify(updatedData, null, 2);
    
    const filePath = './assets/criar-planos.json';
  
    console.log('Changes saved successfully:', jsonData);
  }

  saveChanges() {
    if (!this.selectedCategory || !this.selectedSubcategory) {
      console.error('No category or subcategory selected.');
      return;
    }
  
    const updatedCategories = this.dataCategories.map((category) => {
     
      
    });
  
    const updatedData = { categories: updatedCategories };
  
    this.saveChangesLocally(updatedData);
  
    // Navegue para a página '/planos' após salvar as alterações localmente
    this.router.navigate(['/planos']);
  }
  
  
  }

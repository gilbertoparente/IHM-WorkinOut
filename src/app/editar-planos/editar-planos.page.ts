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

  saveChanges() {
    if (!this.selectedCategory || !this.selectedSubcategory) {
      console.error('No category or subcategory selected.');
      return;
    }
  
    const updatedCategories = this.dataCategories.map((category) => {
      if (this.selectedCategory && category.name === this.selectedCategory.name) {
        const updatedSubcategories = category.subcategories.map((subcategory) => {
          if (this.selectedSubcategory && subcategory.name === this.selectedSubcategory.name) {
            return {
              ...subcategory,
              exercises: this.availableExercises
                .filter((exercise) => exercise.isSelected)
                .map((exercise) => exercise.name),
            };
          }
          return subcategory;
        });
  
        return {
          ...category,
          subcategories: updatedSubcategories,
        };
      }
      return category;
    });
  
    const updatedData = { categories: updatedCategories };
  
    this.http.put('http://example.com/api/criar-planos', updatedData).subscribe(
      () => {
        console.log('Changes saved successfully.');
        this.router.navigate(['/planos']);
      },
      (error) => {
        console.error('Error saving changes:', error);
      }
    );
  }
  }

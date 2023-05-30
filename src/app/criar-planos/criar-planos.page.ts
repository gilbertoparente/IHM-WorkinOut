import { WorkoutPlanService } from './../services/workout-plan.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Exercise {
  name: string;
  isSelected?: boolean;
}

export interface Subcategory {
  name: string;
  exercises: Exercise[];
}

export interface Category {
  name: string;
  subcategories: Subcategory[];
}

@Component({
  selector: 'app-criar-planos',
  templateUrl: './criar-planos.page.html',
  styleUrls: ['./criar-planos.page.scss'],
})
export class CriarPlanosPage implements OnInit {
  public dataCategories: Category[] = [];
  selectedCategory!: string;
  selectedSubcategory!: string;
  availableExercises: Exercise[] = [];
  selectedExercises: Exercise[] = [];
  workoutDuration: number = 30;

  constructor(private router: Router, private workoutPlanService: WorkoutPlanService) {}

  ngOnInit() {
    fetch('./assets/criar-planos.json')
      .then((res) => res.json())
      .then((json) => {
        this.dataCategories = json.categories.map((category: any) => {
          return {
            name: category.name,
            subcategories: category.subcategories.map((subcategory: any) => {
              return {
                name: subcategory.name,
                exercises: subcategory.exercises.map((exercise: string) => {
                  return {
                    name: exercise,
                    isSelected: false
                  };
                }),
              };
            }),
          };
        });
      });
  }

  getSubcategories(category: string): Subcategory[] {
    if (category) {
      const selectedCategory = this.dataCategories.find((c) => c.name === category);
      return selectedCategory?.subcategories || [];
    }
    return [];
  }

  onSubcategoryChange() {
    if (this.selectedCategory && this.selectedSubcategory) {
      const selectedCategory = this.dataCategories.find((c) => c.name === this.selectedCategory);
      const selectedSubcategory = selectedCategory?.subcategories.find(
        (subcategory) => subcategory.name === this.selectedSubcategory
      );
      this.availableExercises = selectedSubcategory?.exercises || [];
    } else {
      this.availableExercises = [];
    }
  }

  resumoPlanos() {
    const selectedCategory = this.dataCategories.find(c => c.name === this.selectedCategory);
    if (selectedCategory) {
      this.workoutPlanService.selectedCategory = selectedCategory;
    }
  
    const selectedSubcategory = selectedCategory?.subcategories.find(s => s.name === this.selectedSubcategory);
    if (selectedSubcategory) {
      this.workoutPlanService.selectedSubcategory = selectedSubcategory;
    }
  
    // Assuming that you have a selectedExercises variable in your component
    if (this.selectedExercises && this.selectedExercises.length > 0) {
      this.workoutPlanService.selectedExercises = this.selectedExercises;
    }
  
    // Assuming that you have a workoutDuration variable in your component
    this.workoutPlanService.workoutDuration = this.workoutDuration;

    this.selectedExercises = this.availableExercises.filter(exercise => exercise.isSelected);
  this.workoutPlanService.selectedExercises = this.selectedExercises;
  
    this.router.navigate(['/planos-resumo']);
  }
  
}

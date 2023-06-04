
import { Injectable } from '@angular/core';
import { Category, Subcategory, Exercise } from './../criar-planos/criar-planos.page';

@Injectable({
  providedIn: 'root'
})
export class WorkoutPlanService {
  workoutPlanName: string = '';
  workoutDuration!: number;
  selectedCategory!: Category;
  selectedSubcategory!: Subcategory;
  selectedExercises: Exercise[] = [];
  
  constructor() { }
}

export { Subcategory, Category };

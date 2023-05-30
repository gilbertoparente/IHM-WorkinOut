import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutPlanService } from '../services/workout-plan.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-planos-resumo',
  templateUrl: './planos-resumo.page.html',
  styleUrls: ['./planos-resumo.page.scss'],
})
export class PlanosResumoPage implements OnInit {
  
  private _storage: Storage | null = null;
  
  constructor(private route: Router, public workoutPlanService: WorkoutPlanService, private storage: Storage) { 
    this.init();
  }

  async init() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async guardarPlano() {
    const workoutPlan = {
      name: this.workoutPlanService.workoutPlanName,
      duration: this.workoutPlanService.workoutDuration,
      category: this.workoutPlanService.selectedCategory,
      subcategory: this.workoutPlanService.selectedSubcategory,
      exercises: this.workoutPlanService.selectedExercises,
    };

    await this._storage?.set('workoutPlan', workoutPlan);
    this.route.navigate(['/tabs/planos'])
  }

  cancelarplano() {
    this.route.navigate(['/tabs/planos'])
  }

  ngOnInit() {
    console.log(this.workoutPlanService.workoutDuration);
    console.log(this.workoutPlanService.selectedCategory);
    console.log(this.workoutPlanService.selectedSubcategory);
    console.log(this.workoutPlanService.selectedExercises);
  }
}

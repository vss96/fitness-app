import { Injectable } from '@angular/core';
import {caloriesDetails, FoodDetails} from './config';

@Injectable({
  providedIn: 'root'
})
export class CaloriesService {

  constructor() { }

  calculateCalories(quantity, foodDetails: FoodDetails) {
    const carbohydrateContribution = (foodDetails.carbohydrates * quantity) / caloriesDetails.carbohydrates;
    const proteinContribution = (foodDetails.protein * quantity) / caloriesDetails.protein;
    const fatContribution = (foodDetails.fat * quantity) / caloriesDetails.fat;
    return carbohydrateContribution + proteinContribution + fatContribution;
  }
}

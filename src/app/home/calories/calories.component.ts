import {Component, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import {MatFormFieldModule, MatSelectModule, MatInputModule, MatOptionModule} from '@angular/material';
import {foodDetails} from './config';
import {CalorieService} from '../../../svc/calorieService';
import {CaloriesService} from './calories.service';


@Component({
    selector: 'app-calories',
    templateUrl: './calories.component.html',
    styleUrls: ['./calories.component.scss']
})

export class CaloriesComponent implements OnInit {
    foods = foodDetails;
    value = '';
    calorieFormGroup: FormGroup;
    selectedDate: any;
    calories: any;

    constructor(private fb: FormBuilder, private caloriesService: CaloriesService) {
        this.calorieFormGroup = this.fb.group({
            foodDetails: this.fb.array([this.fb.group(this.getControlsConfig())])
        });
    }

    ngOnInit() {
        this.calorieFormGroup.valueChanges.subscribe((changes) => {
            console.log(changes);
            this.calories = changes.foodDetails.map((change) => this.caloriesService.calculateCalories(change.quantity, change.food))
                .reduce((a, b) => a + b, 0);
        });
    }

    private getControlsConfig() {
        return {
            food: new FormControl('', Validators.required),
            quantity: new FormControl('', [Validators.required])
        };
    }

    get foodDetails(): FormArray {
        return this.calorieFormGroup.get('foodDetails') as FormArray;
    }

    addInput($event: MouseEvent) {
        this.foodDetails.push(this.fb.group(this.getControlsConfig()));
    }

    deleteRow(indexToRemove) {
       this.foodDetails.removeAt(indexToRemove);
    }
}

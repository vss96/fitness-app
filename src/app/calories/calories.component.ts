import { Component, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MatFormFieldModule, MatSelectModule, MatInputModule, MatOptionModule} from '@angular/material';


@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})

export class CaloriesComponent {
  

  foodItems = ['Rice', 'Chicken',
            'Wheat', 'Milk', 'Egg'];


  submitted = false;

  onSubmit() { this.submitted = true; }

}
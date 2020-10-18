import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputValidator} from '../utils';

@Component({
  selector: 'app-account-creator-stepper',
  templateUrl: './account-creator-stepper.component.html',
  styleUrls: ['./account-creator-stepper.component.scss']
})
export class AccountCreatorStepperComponent implements OnInit {
  userName = new FormControl('', [
    Validators.required,
  ]);
  password = new FormControl('', [Validators.required]);
  heightFormControl = new FormControl('', [Validators.required]);
  weightFormControl = new FormControl('', [Validators.required]);
  userDetailsFormGroup = new FormGroup({
    userName: this.userName,
    password: this.password,
    age: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    height: this.heightFormControl,
    weight: this.weightFormControl
  });
  goalsFormGroup = new FormGroup({
    goals: new FormControl('', [Validators.required])
  });
  genders = [{
    value: 'MALE',
    label: 'Male',
    checked: true
  }, {
    value: 'FEMALE',
    label: 'Female',
    checked: false
  }, {
    value: 'OTHERS',
    label: 'Others',
    checked: false
  }];

  matcher = new InputValidator();
  selectedGender: string;
  age: string;
  goals = [
    {
      goal_id: 1,
      goals: 'Binge watching netflix',
    },
    {
      goal_id: 2,
      goals: 'Sleep for 3 hrs',
    },
    {
      goal_id: 3,
      goals: 'Sleep for 4 hrs',
    },
    {
      goal_id: 4,
      goals: 'Sleep for 5 hrs',
    },
  ];
  selectedGoals: any;
  constructor() {
  }

  ngOnInit() {
  }
  addGoals() {
    console.log(this.goalsFormGroup);
    console.log(this.userDetailsFormGroup);
    console.log(this.selectedGoals);
  }
}

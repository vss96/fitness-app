import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InputValidator} from '../utils';
import {ApiService} from '../../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-creator-stepper',
  templateUrl: './account-creator-stepper.component.html',
  styleUrls: ['./account-creator-stepper.component.scss']
})
export class AccountCreatorStepperComponent implements OnInit {
  username = new FormControl('', [
    Validators.required,
  ]);
  password = new FormControl('', [Validators.required]);
  heightFormControl = new FormControl('', [Validators.required]);
  weightFormControl = new FormControl('', [Validators.required]);
  userDetailsFormGroup = new FormGroup({
    username: this.username,
    password: this.password,
    age: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    height: this.heightFormControl,
    weight: this.weightFormControl
  });
  goalsFormGroup = new FormGroup({
    goal: new FormControl('', [Validators.required])
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
  goals;
  selectedGoals: any;
  constructor(private apiService: ApiService, private router: Router) {
    console.log(this.apiService.getGoals());
    this.apiService.getGoals().subscribe(goals => {
      this.goals = goals;
      console.log(goals);
    });
  }

  ngOnInit() {
  }
  createUser() {
    console.log(this.goalsFormGroup);
    console.log(this.userDetailsFormGroup);
    console.log(this.selectedGender);
    const goalIdPair = {};
    this.goalsFormGroup.value.goals.forEach(x => goalIdPair[x.goal_id] = x.goal);
    const data = {...this.userDetailsFormGroup.value, goal: goalIdPair};
    this.apiService.addUser(data).subscribe(_ => this.router.navigateByUrl('/login'));
  }
}

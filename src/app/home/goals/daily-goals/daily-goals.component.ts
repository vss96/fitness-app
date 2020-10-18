import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';

@Component({
  selector: 'app-daily-goals',
  templateUrl: './daily-goals.component.html',
  styleUrls: ['./daily-goals.component.scss']
})
export class DailyGoalsComponent implements OnInit {

  goals = [
    {
      goal_id: 1,
      goal: '5 squats',
    },
    {
      goal_id: 2,
      goal: '5 push ups',
    },
    {
      goal_id: 3,
      goal: '20 min meditation',
    },
    {
      goal_id: 4,
      goal: 'go to bet before 10 PM',
    },
  ];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getGoalsForUser().subscribe((goals: any) => this.goals = goals);
  }

}

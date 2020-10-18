import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-goals',
  templateUrl: './daily-goals.component.html',
  styleUrls: ['./daily-goals.component.scss']
})
export class DailyGoalsComponent implements OnInit {

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
  constructor() { }

  ngOnInit() {
  }

}

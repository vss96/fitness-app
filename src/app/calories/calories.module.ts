import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { CaloriesComponent } from './calories.component';



@NgModule({
  declarations: [CaloriesComponent],
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA],
  exports : [CaloriesComponent]
})
export class CaloriesModule {}

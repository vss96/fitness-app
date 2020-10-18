import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SideNavbarComponent} from './side-navbar/side-navbar.component';
import {
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {HomeRoutingModule} from './home.routing.module';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {DailyGoalsComponent} from './goals/daily-goals/daily-goals.component';
import {PersonalGoalsComponent} from './goals/personal-goals/personal-goals.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [HomeComponent, SideNavbarComponent, DailyGoalsComponent, PersonalGoalsComponent],
    imports: [
        CommonModule,
        MatSidenavModule,
        HomeRoutingModule,
        MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatCardModule, MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatInputModule,
    ],
    exports: [HomeComponent]
})
export class HomeModule {
}

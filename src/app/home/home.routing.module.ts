import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {CaloriesComponent} from './calories/calories.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'calories',
        component: CaloriesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }

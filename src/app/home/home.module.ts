import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import {MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {HomeRoutingModule} from './home.routing.module';
import {MatListModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';



@NgModule({
  declarations: [HomeComponent, SideNavbarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    HomeRoutingModule,
    MatListModule, MatIconModule, MatToolbarModule, MatButtonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }

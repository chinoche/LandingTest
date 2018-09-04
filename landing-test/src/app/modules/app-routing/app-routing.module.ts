import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {LandingPageComponent} from "../../custom-pages/landing-page/landing-page.component";

const routes:Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "../../custom-pages/landing-page/landing-page.component";
import {FeaturesPageComponent} from "../../features-page/features-page.component";
import {PricingPageComponent} from "../../pricing-page/pricing-page.component";
import {MoreInfoPageComponent} from "../../more-info-page/more-info-page.component";
import {ContactPageComponent} from "../../contact-page/contact-page.component";

const routes:Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'features',
    component: FeaturesPageComponent
  },
  {
    path: 'pricing',
    component: PricingPageComponent
  },
  {
    path: 'more',
    component: MoreInfoPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }

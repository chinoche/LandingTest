import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "../../custom-pages/landing-page/landing-page.component";
import {FeaturesPageComponent} from "../../custom-pages/features-page/features-page.component";
import {PricingPageComponent} from "../../custom-pages/pricing-page/pricing-page.component";
import {MoreInfoPageComponent} from "../../custom-pages/more-info-page/more-info-page.component";
import {ContactPageComponent} from "../../custom-pages/contact-page/contact-page.component";

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderCssComponent } from './components/header-css/header-css.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './custom-pages/landing-page/landing-page.component';
import { FeaturesPageComponent } from './custom-pages/features-page/features-page.component';
import { PricingPageComponent } from './custom-pages/pricing-page/pricing-page.component';
import { MoreInfoPageComponent } from './custom-pages/more-info-page/more-info-page.component';
import { ContactPageComponent } from './custom-pages/contact-page/contact-page.component';
import {AppRoutingModule} from "./modules/app-routing/app-routing.module";
import { PricingElementComponent } from './components/pricing-element/pricing-element.component';
import { IntroComponent } from './components/intro/intro.component';
import {SlideshowModule} from "ng-simple-slideshow";

@NgModule({
  declarations: [
    AppComponent,
    HeaderCssComponent,
    FooterComponent,
    LandingPageComponent,
    FeaturesPageComponent,
    PricingPageComponent,
    MoreInfoPageComponent,
    ContactPageComponent,
    PricingElementComponent,
    IntroComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

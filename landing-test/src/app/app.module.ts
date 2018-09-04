import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderCssComponent } from './components/header-css/header-css.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './custom-pages/landing-page/landing-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { MoreInfoPageComponent } from './more-info-page/more-info-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCssComponent,
    FooterComponent,
    LandingPageComponent,
    FeaturesPageComponent,
    PricingPageComponent,
    MoreInfoPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

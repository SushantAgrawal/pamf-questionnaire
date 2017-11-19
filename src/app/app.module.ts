import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
// import {HttpModule} from '@angular/http';
import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {LetterLandingComponent} from './letter-landing/letter-landing.component';
import {HipLandingComponent} from './hip-landing/hip-landing.component';
import {IncorrectTjrComponent} from './incorrect-tjr/incorrect-tjr.component';
import { HipIntroComponent } from './hip-intro/hip-intro.component';
import { HipPage1Component } from './hip-page1/hip-page1.component';
import { HipPage2Component } from './hip-page2/hip-page2.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
import { KneeLandingComponent } from './knee-landing/knee-landing.component';
import { KneeIntroComponent } from './knee-intro/knee-intro.component';
import { KneePage1Component } from './knee-page1/knee-page1.component';
import { KneePage2Component } from './knee-page2/knee-page2.component';
import { KneePage3Component } from './knee-page3/knee-page3.component';
import { PromisPart1Component } from './promis-part1/promis-part1.component';
import { PromisPart2Component } from './promis-part2/promis-part2.component';
import { PromisPart3Component } from './promis-part3/promis-part3.component';
import { PromisPart4Component } from './promis-part4/promis-part4.component';
import { PromisPart5Component } from './promis-part5/promis-part5.component';
import { ThankYouHipComponent } from './thank-you-hip/thank-you-hip.component';
import { ThankYouKneeComponent } from './thank-you-knee/thank-you-knee.component';
import { IneligibleComponent } from './ineligible/ineligible.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { UnsubscribeThankYouComponent } from './unsubscribe-thank-you/unsubscribe-thank-you.component';
// import { HipMandatoryComponent } from './hip-mandatory/hip-mandatory.component';
// import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LetterLandingComponent,
    HipLandingComponent,
    IncorrectTjrComponent,
    HipIntroComponent,
    HipPage1Component,
    HipPage2Component,
    CollaborateComponent,
    KneeLandingComponent,
    KneeIntroComponent,
    KneePage1Component,
    KneePage2Component,
    KneePage3Component,
    PromisPart1Component,
    PromisPart2Component,
    PromisPart3Component,
    PromisPart4Component,
    PromisPart5Component,
    ThankYouHipComponent,
    ThankYouKneeComponent,
    IneligibleComponent,
    UnsubscribeComponent,
    UnsubscribeThankYouComponent
    // HipMandatoryComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    // HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: false}), FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
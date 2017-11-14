import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import { LetterLandingPageComponent } from './letter-landing-page/letter-landing-page.component';
import { IncorrectTjrAccessCodeComponent } from './incorrect-tjr-access-code/incorrect-tjr-access-code.component';
import { HipHoosLandingComponent } from './hip-hoos-landing/hip-hoos-landing.component';
import { HoosQ1Q2Component } from './hoos-q1-q2/hoos-q1-q2.component';
import { HipHoosIntroComponent } from './hip-hoos-intro/hip-hoos-intro.component';
import { CollaborateQuestionnaireComponent } from './collaborate-questionnaire/collaborate-questionnaire.component';

@NgModule({
  declarations: [AppComponent, LetterLandingPageComponent, IncorrectTjrAccessCodeComponent, HipHoosLandingComponent, HoosQ1Q2Component, HipHoosIntroComponent, CollaborateQuestionnaireComponent],
  imports: [
    BrowserModule, HttpClientModule
    //, RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ROUTES} from './app.config';
import {AppComponent} from './app.component';
import {AppService} from './app.service';
import {LetterLandingComponent} from './letter-landing/letter-landing.component';
import {HipLandingComponent} from './hip-landing/hip-landing.component';
import {IncorrectTjrComponent} from './incorrect-tjr/incorrect-tjr.component';

import {HoosQ1Q2Component} from './hoos-q1-q2/hoos-q1-q2.component';
import {HipHoosIntroComponent} from './hip-hoos-intro/hip-hoos-intro.component';
import {CollaborateQuestionnaireComponent} from './collaborate-questionnaire/collaborate-questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    LetterLandingComponent,
    HipLandingComponent,
    IncorrectTjrComponent,

    HoosQ1Q2Component,
    HipHoosIntroComponent,
    CollaborateQuestionnaireComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES, {useHash: false})//, FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
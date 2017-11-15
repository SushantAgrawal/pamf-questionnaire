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
import { HipIntroComponent } from './hip-intro/hip-intro.component';
import { HipPage1Component } from './hip-page1/hip-page1.component';
import { HipPage2Component } from './hip-page2/hip-page2.component';
import { CollaborateComponent } from './collaborate/collaborate.component';


@NgModule({
  declarations: [
    AppComponent,
    LetterLandingComponent,
    HipLandingComponent,
    IncorrectTjrComponent,
    HipIntroComponent,
    HipPage1Component,
    HipPage2Component,
    CollaborateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES, {useHash: false})//, FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
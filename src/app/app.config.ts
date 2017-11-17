import { Routes } from '@angular/router';
import { LetterLandingComponent } from './letter-landing/letter-landing.component';
import { HipLandingComponent } from './hip-landing/hip-landing.component';
import { IncorrectTjrComponent } from './incorrect-tjr/incorrect-tjr.component';
import { HipIntroComponent } from './hip-intro/hip-intro.component';
import { HipPage1Component } from './hip-page1/hip-page1.component';
import { HipPage2Component } from './hip-page2/hip-page2.component';
import { HipMandatoryComponent } from './hip-mandatory/hip-mandatory.component';
import { KneeIntroComponent } from './knee-intro/knee-intro.component';
import { KneeLandingComponent } from './knee-landing/knee-landing.component';
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
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { UnsubscribeThankYouComponent } from './unsubscribe-thank-you/unsubscribe-thank-you.component';
import { IneligibleComponent } from './ineligible/ineligible.component';
import { CollaborateComponent } from './collaborate/collaborate.component';
export const messages = {
    idNotMappedToUrl: 'Message id is not mapped to http url in config.ts file at application root.',
    httpGetUnknownError: 'Unknown error encountered while making http get request'
};
// let host = window.location.href;

export const urlMaps = {
    "letter:landing:next": "landing-page",
    "incorrect:tjr:done": "login",
    "hip:landing:next": "load-questionnaire",
    "hip:mandatory:post": "submit-questionnaire",
    "hip:mandatory:redirect": "load-questionnaire",
    "knee:page3:post": "submit-questionnaire",
    "knee:page3:redirect": "load-questionnaire",
    "promis:part5:post": "submit-questionnaire",
    "promis:part5:redirect": "load-questionnaire",
    "ineligible:next": "login",
    "unsubscribe:next": "opt-out",
    "do:not:unsubscribe": "http://www.pamf.org",
    "unsubscribe:thank:you:exit": "http://www.pamf.org",
    "collaborate:post": "submit-questionnaire",
    "collaborate:redirect": "load-questionnaire"
}
//
export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'letterLanding',
        pathMatch: 'full'
    }, {
        path: 'pamf',
        redirectTo: 'letterLanding',
        pathMatch: 'full'
    }, {
        path: 'pamf/letterLanding',
        redirectTo: 'letterLanding',
        pathMatch: 'full'
    }, {
        path: 'pamf/incorrectTjr',
        redirectTo: 'incorrectTjr',
        pathMatch: 'full'
    }, {
        path: 'letterLanding',
        component: LetterLandingComponent
    }, {
        path: 'hipLanding',
        component: HipLandingComponent
    }, {
        path: 'incorrectTjr',
        component: IncorrectTjrComponent
    }, {
        path: 'hipIntro',
        component: HipIntroComponent
    }, {
        path: 'hipPage1',
        component: HipPage1Component
    }, {
        path: 'hipPage2',
        component: HipPage2Component
    }, {
        path: 'hipMandatory',
        component: HipMandatoryComponent
    },
    {
        path: 'kneeLanding',
        component: KneeLandingComponent
    }, {
        path: 'kneeIntro',
        component: KneeIntroComponent
    }, {
        path: 'kneePage1',
        component: KneePage1Component
    }, {
        path: 'kneePage2',
        component: KneePage2Component
    }, {
        path: 'kneePage3',
        component: KneePage3Component
    }, {
        path: 'promisPart1',
        component: PromisPart1Component
    }, {
        path: 'promisPart2',
        component: PromisPart2Component
    }, {
        path: 'promisPart3',
        component: PromisPart3Component
    }, {
        path: 'promisPart4',
        component: PromisPart4Component
    }, {
        path: 'promisPart5',
        component: PromisPart5Component
    }, {
        path: 'promisPart5',
        component: PromisPart5Component
    }, {
        path: 'thankYouHip',
        component: ThankYouHipComponent
    }, {
        path: 'thankYouKnee',
        component: ThankYouKneeComponent
    }, {
        path: 'unsubscribe',
        component: UnsubscribeComponent
    }, {
        path: 'unsubscribeThankYou',
        component: UnsubscribeThankYouComponent
    }, {
        path: 'ineligible',
        component: IneligibleComponent
    }, {
        path: 'collaborate',
        component: CollaborateComponent
    }
];




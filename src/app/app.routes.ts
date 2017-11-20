import { Routes } from '@angular/router';
import { LetterLandingComponent } from './letter-landing/letter-landing.component';
import { HipLandingComponent } from './hip-landing/hip-landing.component';
import { IncorrectTjrComponent } from './incorrect-tjr/incorrect-tjr.component';
import { HipIntroComponent } from './hip-intro/hip-intro.component';
import { HipPage1Component } from './hip-page1/hip-page1.component';
import { HipPage2Component } from './hip-page2/hip-page2.component';
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

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'letterLanding',
        pathMatch: 'full',
        data: { title: 'Letter Landing Page - PROD | QuestionPro Survey' }
    }, {
        path: 'pamf',
        redirectTo: 'letterLanding',
        pathMatch: 'full',
        data: { title: 'Letter Landing Page - PROD | QuestionPro Survey' }
    }, {
        path: 'pamf/letterLanding',
        redirectTo: 'letterLanding',
        pathMatch: 'full',
        data: { title: 'Letter Landing Page - PROD | QuestionPro Survey' }
    }, {
        path: 'pamf/incorrectTjr',
        redirectTo: 'incorrectTjr',
        pathMatch: 'full',
        data: { title: 'Invalid TJR Access - PROD | QuestionPro Survey' }
    }, {
        path: 'letterLanding',
        component: LetterLandingComponent,
        data: { title: 'Letter Landing Page - PROD | QuestionPro Survey' }
    }, {
        path: 'hipLanding',
        component: HipLandingComponent,
        data: { title: 'Hip Replacement Landing Page - PROD | QuestionPro Survey' }        
    }, {
        path: 'incorrectTjr',
        component: IncorrectTjrComponent,
        data: { title: 'Hip Replacement Landing Page - PROD | QuestionPro Survey' } 
    }, {
        path: 'hipIntro',
        component: HipIntroComponent,
        data: { title: 'Hip Survey - HOOS Jr - PROD | QuestionPro Survey' } 
    }, {
        path: 'hipPage1',
        component: HipPage1Component,
        data: { title: 'Hip Survey - HOOS Jr - PROD | QuestionPro Survey' } 
    }, {
        path: 'hipPage2',
        component: HipPage2Component,
        data: { title: 'Hip Survey - HOOS Jr - PROD | QuestionPro Survey' } 
    },
    {
        path: 'kneeLanding',
        component: KneeLandingComponent,
        data: { title: 'Knee Replacement Landing Page - PROD | QuestionPro Survey' } 
    }, {
        path: 'kneeIntro',
        component: KneeIntroComponent,
        data: { title: 'Knee Survey - KOOS Jr - PROD | QuestionPro Survey' } 
    }, {
        path: 'kneePage1',
        component: KneePage1Component,
        data: { title: 'Knee Survey - KOOS Jr - PROD | QuestionPro Survey' } 
    }, {
        path: 'kneePage2',
        component: KneePage2Component,
        data: { title: 'Knee Survey - KOOS Jr  - PROD | QuestionPro Survey' } 
    }, {
        path: 'kneePage3',
        component: KneePage3Component,
        data: { title: 'Knee Survey - KOOS Jr  - PROD | QuestionPro Survey' } 
    }, {
        path: 'promisPart1',
        component: PromisPart1Component,
        data: { title: 'PROMIS - General Health Survey - PROD | QuestionPro Survey' } 
    }, {
        path: 'promisPart2',
        component: PromisPart2Component,
        data: { title: 'PROMIS - General Health Survey - PROD | QuestionPro Survey' } 
    }, {
        path: 'promisPart3',
        component: PromisPart3Component,
        data: { title: 'PROMIS - General Health Survey - PROD | QuestionPro Survey' } 
    }, {
        path: 'promisPart4',
        component: PromisPart4Component,
        data: { title: 'PROMIS - General Health Survey - PROD| QuestionPro Survey' } 
    }, {
        path: 'promisPart5',
        component: PromisPart5Component,
        data: { title: 'PROMIS - General Health Survey - PROD| QuestionPro Survey' } 
    }, {
        path: 'promisPart5',
        component: PromisPart5Component,
        data: { title: 'PROMIS - General Health Survey - PROD | QuestionPro Survey' } 
    }, {
        path: 'thankYouHip',
        component: ThankYouHipComponent,
        data: { title: 'Thank You Hip Replacement - PROD  | QuestionPro Survey' } 
    }, {
        path: 'thankYouKnee',
        component: ThankYouKneeComponent,
        data: { title: 'Thank You Knee Replacement - PROD  | QuestionPro Survey' } 
    }, {
        path: 'unsubscribe',
        component: UnsubscribeComponent,
        data: { title: 'Unsubscribe Confirm - PROD | QuestionPro Survey' } 
    }, {
        path: 'unsubscribeThankYou',
        component: UnsubscribeThankYouComponent,
        data: { title: 'Unsubscribe Thank you - PROD | QuestionPro Survey' } 
    }, {
        path: 'ineligible',
        component: IneligibleComponent,
        data: { title: 'Ineligible Pt - PROD  | QuestionPro Survey' } 
    }, {
        path: 'collaborate',
        component: CollaborateComponent,
        data: { title: 'CollaboRATE Survey - PROD | QuestionPro Survey' } 
    }
];
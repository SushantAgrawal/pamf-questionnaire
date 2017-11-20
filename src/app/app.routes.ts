import {Routes} from '@angular/router';
import {LetterLandingComponent} from './letter-landing/letter-landing.component';
import {HipLandingComponent} from './hip-landing/hip-landing.component';
import {IncorrectTjrComponent} from './incorrect-tjr/incorrect-tjr.component';
import {HipIntroComponent} from './hip-intro/hip-intro.component';
import {HipPage1Component} from './hip-page1/hip-page1.component';
import {HipPage2Component} from './hip-page2/hip-page2.component';
import {KneeIntroComponent} from './knee-intro/knee-intro.component';
import {KneeLandingComponent} from './knee-landing/knee-landing.component';
import {KneePage1Component} from './knee-page1/knee-page1.component';
import {KneePage2Component} from './knee-page2/knee-page2.component';
import {KneePage3Component} from './knee-page3/knee-page3.component';
import {PromisPart1Component} from './promis-part1/promis-part1.component';
import {PromisPart2Component} from './promis-part2/promis-part2.component';
import {PromisPart3Component} from './promis-part3/promis-part3.component';
import {PromisPart4Component} from './promis-part4/promis-part4.component';
import {PromisPart5Component} from './promis-part5/promis-part5.component';
import {ThankYouHipComponent} from './thank-you-hip/thank-you-hip.component';
import {ThankYouKneeComponent} from './thank-you-knee/thank-you-knee.component';
import {UnsubscribeComponent} from './unsubscribe/unsubscribe.component';
import {UnsubscribeThankYouComponent} from './unsubscribe-thank-you/unsubscribe-thank-you.component';
import {IneligibleComponent} from './ineligible/ineligible.component';
import {CollaborateComponent} from './collaborate/collaborate.component';

export const ROUTES : Routes = [
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
        component: LetterLandingComponent,
        data: {
            title: 'Letter landing'
        }
    }, {
        path: 'hipLanding',
        component: HipLandingComponent,
        data: {
            title: 'Hip landing'
        }
    }, {
        path: 'incorrectTjr',
        component: IncorrectTjrComponent,
        data: {
            title: 'Incorrect code'
        }
    }, {
        path: 'hipIntro',
        component: HipIntroComponent,
        data: {
            title: 'Hip intro'
        }
    }, {
        path: 'hipPage1',
        component: HipPage1Component,
        data: {
            title: 'Hip questions page1'
        }
    }, {
        path: 'hipPage2',
        component: HipPage2Component,
        data: {
            title: 'Hip questions page2'
        }
    }, {
        path: 'kneeLanding',
        component: KneeLandingComponent,
        data: {
            title: 'Knee landing'
        }
    }, {
        path: 'kneeIntro',
        component: KneeIntroComponent,
        data: {
            title: 'Knee intro'
        }
    }, {
        path: 'kneePage1',
        component: KneePage1Component,
        data: {
            title: 'Knee questions page1'
        }
    }, {
        path: 'kneePage2',
        component: KneePage2Component,
        data: {
            title: 'Knee questions page2'
        }
    }, {
        path: 'kneePage3',
        component: KneePage3Component,
        data: {
            title: 'Knee questions page3'
        }
    }, {
        path: 'promisPart1',
        component: PromisPart1Component,
        data: {
            title: 'Promis part1'
        }
    }, {
        path: 'promisPart2',
        component: PromisPart2Component,
        data: {
            title: 'Promis part2'
        }
    }, {
        path: 'promisPart3',
        component: PromisPart3Component,
        data: {
            title: 'Promis part 3'
        }
    }, {
        path: 'promisPart4',
        component: PromisPart4Component,
        data: {
            title: 'Promis part4'
        }
    }, {
        path: 'promisPart5',
        component: PromisPart5Component,
        data: {
            title: 'Promis part5'
        }
    }, {
        path: 'thankYouHip',
        component: ThankYouHipComponent,
        data: {
            title: 'Thank You Hip Replacement'
        }
    }, {
        path: 'thankYouKnee',
        component: ThankYouKneeComponent,
        data: {
            title: 'Thank You Knee Replacement'
        }
    }, {
        path: 'unsubscribe',
        component: UnsubscribeComponent,
        data: {
            title: 'Unsubscribe'
        }
    }, {
        path: 'unsubscribeThankYou',
        component: UnsubscribeThankYouComponent,
        data: {
            title: 'Unsubscribe thank you'
        }
    }, {
        path: 'ineligible',
        component: IneligibleComponent,
        data: {
            title: 'Ineligible'
        }
    }, {
        path: 'collaborate',
        component: CollaborateComponent,
        data: {
            title: 'Collaborate'
        }
    }
];
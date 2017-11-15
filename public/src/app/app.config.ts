import {Routes} from '@angular/router';
import {LetterLandingComponent} from './letter-landing/letter-landing.component';
import {HipLandingComponent} from './hip-landing/hip-landing.component';
import {IncorrectTjrComponent} from './incorrect-tjr/incorrect-tjr.component';

export const messages = {
    idNotMappedToUrl: 'Message id is not mapped to http url in config.ts file at application root.',
    httpGetUnknownError: 'Unknown error encountered while making http get request'
};
let host = window.location.href;
export const urlMaps = {
    "file:options:json": "assets/options.json",
    "post:letter:landing": "http://localhost:3003/pamf/landing-page",
    "test": 'http://localhost:3003/bio/test',
    "test1": 'http://localhost:3003/bio/questionnaire',
    "test2": 'http://localhost:3003/pamf/testPamf'
}

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
        component: LetterLandingComponent
    }, {
        path: 'hipLanding',
        component: HipLandingComponent
    }, {
        path: 'incorrectTjr',
        component: IncorrectTjrComponent
    }
];

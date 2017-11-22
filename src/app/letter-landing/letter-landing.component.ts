import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
// import {environment} from '../../environments/environment';

@Component({ selector: 'app-letter-landing', templateUrl: './letter-landing.component.html', styleUrls: ['./letter-landing.component.scss'], encapsulation: ViewEncapsulation.None })
export class LetterLandingComponent implements OnInit {
  subscriptions: any;
  code: string;
  email: string
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("letter:landing:next")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.redirectUrl;
            let urlObject = this.appService.parseURL(redirectUrl);

            // let url = new URL(redirectUrl);
            // let c14 = url.searchParams.get("c14");
            let c14 = urlObject.searchObject['c14'] || '';
            this.appService.setUrlParam('c14', c14);
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], { queryParamsHandling: "merge", queryParams: { c14: c14 } });
          })()
      });
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (this.appService.httpPost('letter:landing:next', null,
      { contact_type: this.appService.urlParams['c1'], code: this.code, email: this.email }));
    // let validCode = x.controls.code.valid;
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

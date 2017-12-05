import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({selector: 'app-letter-landing', templateUrl: './letter-landing.component.html', styleUrls: ['./letter-landing.component.scss'], encapsulation: ViewEncapsulation.None})
export class LetterLandingComponent implements OnInit {
  subscriptions : any;
  code : string;
  email : string
  @ViewChild('myForm')myForm : any;
  start : boolean = true;
  constructor(public appService : AppService, private router : Router) {}

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("letter:landing:next")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.data.redirectUrl;
            let urlObject = this
              .appService
              .parseURL(redirectUrl);

            let c14 = urlObject.searchObject['c14'] || '';
            
            let route = this
              .appService
              .getRoute(redirectUrl);
              this
              .appService
              .getUrlParams(redirectUrl);
              this
              .appService
              .setUrlParam('c14', c14);
            this
              .router
              .navigate([route], {
                queryParamsHandling: "merge",
                queryParams: this
                .appService.urlParams
              });
          })()
      });
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (this.appService.httpGet('letter:landing:next', {
      contact_type: this.appService.urlParams['c1'],
      code: this.code,
      email: this.email
    }));
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

//deprecated let validCode = x.controls.code.valid;
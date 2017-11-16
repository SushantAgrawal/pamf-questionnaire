import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({ selector: 'app-letter-landing', templateUrl: './letter-landing.component.html', styleUrls: ['./letter-landing.component.scss'], encapsulation: ViewEncapsulation.None })
export class LetterLandingComponent implements OnInit {
  subscriptions: any;
  code: string;
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("post:letter:landing")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.redirectUrl;
            console.log(redirectUrl);
            let route = this.appService.getRoute(redirectUrl);
            this.router.navigate([route]);
          })()
      })
  }

  // let urlObject : any = urlArray.reduce((prevValue, x, i) => {
  //   let elementArray = x && x.split('=');
  //   (elementArray.length > 0) && (prevValue[elementArray[0]] = elementArray[1]);
  //   return (prevValue);
  // }, {});

  submitClicked() {
    let body1 = { "name": "sss", "address": "bbb" };
    let httpParams = new HttpParams();
    httpParams = Object.keys(body1).reduce((prevValue, x, i) => {
      httpParams = httpParams.append(x, body1[x]);
      // let elementArray = x && x.split('=');
      // (elementArray.length > 0) && (prevValue[elementArray[0]] = elementArray[1]);
      return (httpParams);
    }, httpParams);
    let body = httpParams.toString();
    // Object.entries(body1).map(x => console.log(x));
    // this.router.navigate(['hipLanding']);
    // this
    // .appService
    // .httpPost('post:letter:landing');
    // return(false);
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

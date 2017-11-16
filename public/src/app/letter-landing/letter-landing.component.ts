import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({ selector: 'app-letter-landing', templateUrl: './letter-landing.component.html', styleUrls: ['./letter-landing.component.scss'], encapsulation: ViewEncapsulation.None })
export class LetterLandingComponent implements OnInit {
  subscriptions: any;
  code: string;
  email: string
  @ViewChild('myForm') myForm: any;
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
            // console.log(redirectUrl);
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route]);
          })()
      });    
  }

  next() {    
    // this.router.navigate(['hipLanding']);    
    let thisForm = this.myForm.form;
    thisForm.valid && (this.appService.httpPost('post:letter:landing',
      { code: this.code, email: this.email }));
    // let validCode = x.controls.code.valid;
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { hipQuestions } from '../app.questions';
import { AppService } from '../app.service';
@Component({ selector: 'app-hip-page2', templateUrl: './hip-page2.component.html', styleUrls: ['./hip-page2.component.scss'], encapsulation: ViewEncapsulation.None })
export class HipPage2Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  rising: string;
  bending: string;
  lying: string;
  sitting: string;
  options: any[] = ['none', 'Mild', 'Moderate', 'Severe', 'Extreme'];
  scores: {} = {
    none: 1,
    Mild: 2,
    Moderate: 3,
    Severe: 4,
    Extreme: 5
  };

  subscriptions: any;
  constructor(private router: Router, public appService: AppService) { }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("hip:page2:submit")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            this
              .appService
              .httpGet('hip:page2:redirect', {
                code: this.appService.urlParams['c1'],
                bundle: this.appService.urlParams['c2'],
                contact_type: this.appService.urlParams['c4'],
                accessed_by: this.appService.urlParams['c11'],
                complete_date: this.appService.urlParams['c14']
              });
          })()
      });
    let sub1 = this
      .appService
      .filterOn('hip:page2:redirect')
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.data.redirectUrl;
            // let url = new URL(redirectUrl);
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], { queryParamsHandling: "merge" });
          })()
      });
    this
      .subscriptions
      .add(sub1);
  }
  selectRow(value, val) {

    switch (val) {
      case 0:
        this.rising = value;
        break;
      case 1:
        this.bending = value;
        break;
      case 2:
        this.lying = value;
        break;
      case 3:
        this.sitting = value;
        break;
      default:
    }
  }
  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (this.appService.fillHipQuestionsTopSec()
      , hipQuestions.responses[2].answer_text[0] = this.rising.toString()
      , hipQuestions.responses[2].answer_text_score[0] = this.scores[this.rising].toString()
      , hipQuestions.responses[3].answer_text[0] = this.bending.toString()
      , hipQuestions.responses[3].answer_text_score[0] = this.scores[this.bending].toString()
      , hipQuestions.responses[4].answer_text[0] = this.lying.toString()
      , hipQuestions.responses[4].answer_text_score[0] = this.scores[this.lying].toString()
      , hipQuestions.responses[5].answer_text[0] = this.sitting.toString()
      , hipQuestions.responses[5].answer_text_score[0] = this.scores[this.sitting].toString()
      , this.appService.httpPost('hip:page2:submit', hipQuestions)
    );
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { hipQuestions } from '../app.questions';
import { AppService } from '../app.service';
@Component({
  selector: 'app-hip-page2',
  templateUrl: './hip-page2.component.html',
  styleUrls: ['./hip-page2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HipPage2Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  rising: string;
  bending: string;
  lying: string;
  sitting: string;
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
            this.appService.httpPost('hip:page2:redirect');
            console.log(d.data);
          })()
      });
    let sub1 = this.appService.filterOn('hip:page2:redirect')
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.redirectUrl;
            let url = new URL(redirectUrl);
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], { queryParamsHandling: "merge" });
          })()
      });
    this.subscriptions.add(sub1);
  }
  next() {
    debugger;
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      hipQuestions.responses[2].answer_text[0] = this.rising
      , hipQuestions.responses[2].answer_text_score[0] = this.scores[this.rising]
      , hipQuestions.responses[3].answer_text[0] = this.bending
      , hipQuestions.responses[3].answer_text_score[0] = this.scores[this.bending]
      , hipQuestions.responses[4].answer_text[0] = this.lying
      , hipQuestions.responses[4].answer_text_score[0] = this.scores[this.lying]
      , hipQuestions.responses[5].answer_text[0] = this.sitting
      , hipQuestions.responses[5].answer_text_score[0] = this.scores[this.sitting]
      , this.appService.httpPost('hip:page2:submit', hipQuestions)
    );

  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }

}

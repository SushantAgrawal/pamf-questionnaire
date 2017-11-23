import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../app.service';
import {kneeQuestions} from '../app.questions';
@Component({
  selector: 'app-knee-page3',
  templateUrl: './knee-page3.component.html',
  styleUrls: ['./knee-page3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage3Component implements OnInit {
  subscriptions: any;
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  rising: string;
  bending: string;
  scores: any[] = [];
  

  constructor(private router : Router, private appService:AppService) {
    this.scores = [
      { key: 'none', value: 1 },
      { key: 'Mild', value: 2 },
      { key: 'Moderate', value: 3 },
      { key: 'Severe', value: 4 },
      { key: 'Extreme', value: 5 }
    ];

  }  
    ngOnInit() {
      this.subscriptions = this
      .appService
      .filterOn("knee:page3:submit")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            this.appService.httpPost('knee:page3:redirect');
            console.log(d.data);
          })()
      });
    let sub1 = this.appService.filterOn('knee:page3:redirect')
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
      this.start = false;
      let thisForm = this.myForm.form;
      thisForm.valid && (
        kneeQuestions.responses[5].answer_text[0] = this.rising
        , kneeQuestions.responses[5].answer_text_score[0] = this.scores[this.rising]
        , kneeQuestions.responses[6].answer_text[0] = this.bending
        , kneeQuestions.responses[6].answer_text_score[0] = this.scores[this.bending]
        //, console.log(kneeQuestions.responses)
        , this.appService.httpPost('knee:page3:submit',kneeQuestions)
      );
      
    }

    selectRow(value, val) {

      switch (val) 
      { 
      case 0: 
      this.rising = value.key; 
        break; 
      case 1: 
      this.bending = value.key; 
        break;
      default:       
      } 
    }

    ngOnDestroy() {
      this
        .subscriptions
        .unsubscribe();
    }
}

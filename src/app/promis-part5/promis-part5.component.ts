import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {promisQuestions} from '../app.questions';
@Component({selector: 'app-promis-part5', templateUrl: './promis-part5.component.html', styleUrls: ['./promis-part5.component.scss'], encapsulation: ViewEncapsulation.None})
export class PromisPart5Component implements OnInit {
  subscriptions : any;
  @ViewChild('myForm')myForm : any;
  start : boolean = true;
  pain : string;
  scores : any[] = [];
  // scores: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private router : Router, public appService : AppService) {
    this.scores = [
      {
        key: 1,
        value: 'No Pain',
        css: 'node1'
      }, {
        key: 2
      }, {
        key: 3
      }, {
        key: 4
      }, {
        key: 5
      }, {
        key: 6
      }, {
        key: 7
      }, {
        key: 8
      }, {
        key: 9
      }, {
        key: 10,
        value: 'Worst Imaginable Pain',
        css: 'node-last'
      }
    ];
  }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("promis:part5:submit")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            this
              .appService
              .httpGet('promis:part5:redirect', {
                code: this.appService.urlParams['c1'],
                bundle: this.appService.urlParams['c2'],
                contact_type: this.appService.urlParams['c4'],
                accessed_by: this.appService.urlParams['c11'],
                complete_date: this.appService.urlParams['c14']
              });
            console.log(d.data);
          })()
      });
    let sub1 = this
      .appService
      .filterOn('promis:part5:redirect')
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.redirectUrl;
            // let url = new URL(redirectUrl);
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], {queryParamsHandling: "merge"});
          })()
      });
    this
      .subscriptions
      .add(sub1);
  }
  selectRow(value) {

    this.pain = value;
  }
  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (promisQuestions.responses[9].answer_text[0] = this.pain, promisQuestions.responses[9].answer_text_score[0] = this.pain,
    //, console.log(promisQuestions.responses)
    this.appService.httpPost('promis:part5:submit', promisQuestions));

  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

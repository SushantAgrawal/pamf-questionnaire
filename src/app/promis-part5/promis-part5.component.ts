import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { promisQuestions } from '../app.questions';
@Component({
  selector: 'app-promis-part5',
  templateUrl: './promis-part5.component.html',
  styleUrls: ['./promis-part5.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart5Component implements OnInit {
  subscriptions: any;
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  pain: string; 
  constructor(private router: Router, public appService: AppService) { }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("promis:part5:submit")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            this.appService.httpPost('promis:part5:redirect');
            console.log(d.data);
          })()
      });
    let sub1 = this.appService.filterOn('promis:part5:redirect')
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
      promisQuestions.responses[9].answer_text[0] = this.pain
      , promisQuestions.responses[9].answer_text_score[0] = this.pain
      , console.log(promisQuestions.responses)
      , this.appService.httpPost('promis:part5:submit', promisQuestions)
    );
    
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

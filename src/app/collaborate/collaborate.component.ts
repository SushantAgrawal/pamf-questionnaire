import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { collaborate } from '../app.questions';
@Component({
  selector: 'app-collaborate',
  templateUrl: './collaborate.component.html',
  styleUrls: ['./collaborate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollaborateComponent implements OnInit {
  subscriptions: any;
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  healthIssues: string;
  matter: string;
  choosingNext: string;
  constructor(private router: Router, public appService: AppService) { }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("collaborate:submit")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            this.appService.httpPost('collaborate:redirect');
            console.log(d.data);
          })()
      });
    let sub1 = this.appService.filterOn('collaborate:redirect')
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
      collaborate.responses[0].answer_text[0] = this.healthIssues
      , collaborate.responses[0].answer_text_score[0] = this.healthIssues
      , collaborate.responses[1].answer_text[0] = this.matter
      , collaborate.responses[1].answer_text_score[0] = this.matter
      , collaborate.responses[2].answer_text[0] = this.choosingNext
      , collaborate.responses[2].answer_text_score[0] = this.choosingNext
      , console.log(collaborate.responses)
      , this.appService.httpPost('collaborate:submit', collaborate)
    );

  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

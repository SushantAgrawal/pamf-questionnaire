import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  constructor(private router : Router, private appService:AppService) {}  
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
      this.appService.httpPost('knee:page3:submit',kneeQuestions)
    }

    ngOnDestroy() {
      this
        .subscriptions
        .unsubscribe();
    }
}

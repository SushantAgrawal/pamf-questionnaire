import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  subscriptions: any;
  constructor(private router: Router, private appService: AppService) { }

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
    this.appService.httpPost('hip:page2:submit', hipQuestions);
    // this.router.navigate(['hipMandatory'])
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
  change(event,score,value) {
    collaborate.responses.find(x => x.qx_code === event.srcElement.name).answer_text=[];
    collaborate.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score=[];
    collaborate.responses.find(x => x.qx_code === event.srcElement.name).answer_text.push(value);
    collaborate.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score.push(score);
  }
  next() {
    this.appService.httpPost('collaborate:submit', collaborate)
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

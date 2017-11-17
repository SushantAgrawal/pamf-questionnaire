import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { urlMaps } from '../app.config';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnsubscribeComponent implements OnInit {
  subscriptions: any;
  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.subscriptions = this
    .appService
    .filterOn("unsubscribe:next")
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
  }

  next() {
    this.appService.httpPost('unsubscribe:next');
  }

  notUnsubscribe() {
    window.location.href = urlMaps['pamf:url'];
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }

}

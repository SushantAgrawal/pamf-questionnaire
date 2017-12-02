import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-incorrect-tjr', templateUrl: './incorrect-tjr.component.html', styleUrls: ['./incorrect-tjr.component.scss'], encapsulation: ViewEncapsulation.None })
export class IncorrectTjrComponent implements OnInit {
  subscriptions: any;
  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.subscriptions = this.appService.filterOn('incorrect:tjr:done').subscribe(
      d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.data.redirectUrl;
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], { queryParamsHandling: "merge" });
          })();
      }
    );
  }

  done() {
    this.appService.httpGet('incorrect:tjr:done');
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

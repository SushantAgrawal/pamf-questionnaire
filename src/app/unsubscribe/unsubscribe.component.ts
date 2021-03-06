import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {urlMaps} from '../app.config';

@Component({selector: 'app-unsubscribe', templateUrl: './unsubscribe.component.html', styleUrls: ['./unsubscribe.component.scss'], encapsulation: ViewEncapsulation.None})
export class UnsubscribeComponent implements OnInit {
  subscriptions : any;
  constructor(private router : Router, public appService : AppService) {}

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("unsubscribe:next")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.data.redirectUrl;
            // let url = new URL(redirectUrl);
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], {queryParamsHandling: "merge"});
          })()
      });
  }

  next() {
    this
      .appService
      .httpGet('unsubscribe:next', {
        code: this.appService.urlParams['c1'],
        bundle: this.appService.urlParams['c2'],
        contact_type: this.appService.urlParams['c4'],
        accessed_by: this.appService.urlParams['c11'],
        complete_date: this.appService.urlParams['c14']
      });
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

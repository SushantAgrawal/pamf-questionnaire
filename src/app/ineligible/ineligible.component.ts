import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ineligible',
  templateUrl: './ineligible.component.html',
  styleUrls: ['./ineligible.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IneligibleComponent implements OnInit {
  subscriptions: any;
  constructor(public appService: AppService, private router: Router) { }

  ngOnInit() {
    this.subscriptions = this.appService.filterOn('ineligible:next').subscribe(
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
  next(){
    this.appService.httpGet('ineligible:next');
  }
  
  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

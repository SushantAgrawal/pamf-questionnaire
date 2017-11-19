import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-hip-landing',
  templateUrl: './hip-landing.component.html',
  styleUrls: ['./hip-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HipLandingComponent implements OnInit {
  subscriptions: any;
  constructor(public appService: AppService, private router: Router) { 

  }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("hip:landing:next")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.redirectUrl;
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], { queryParamsHandling: "merge"});
          })()
      });
      
  }
  //code=${custom1}&bundle=${custom2}&contact_type=${custom4}&accessed_by=${custom11}&complete_date=${custom14
  next() {
    let urlParams: any = this.appService.urlParams;
    this.appService.httpPost('hip:landing:next', null,
      {
        code: urlParams.c1,
        bundle:urlParams.c2,
        contact_type:urlParams.c4,
        accessed_by:urlParams.c11,
        complete_date:urlParams.c14
      });
    // this.router.navigate(['hipIntro']);
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

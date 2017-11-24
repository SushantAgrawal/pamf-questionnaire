import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { urlMaps } from '../app.config';

@Component({
  selector: 'app-knee-landing',
  templateUrl: './knee-landing.component.html',
  styleUrls: ['./knee-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneeLandingComponent implements OnInit {
  subscriptions: any;
  kneePrivacyPolicy: any;
  termsAndConditions: any;
  pros1: any;
  pros2: any;
  pros3: any;
  pros4: any;
  constructor(public appService: AppService, private router: Router) {

  }

  ngOnInit() {
    this.kneePrivacyPolicy = urlMaps['pamf:privacy:policy:url'];
    this.termsAndConditions = urlMaps['pamf:terms:conditions:url'];
    this.pros1 = urlMaps['pamf:knee:replacement:pro1:url'];
    this.pros2 = urlMaps['pamf:knee:replacement:pro2:url'];
    this.pros3 = urlMaps['pamf:knee:replacement:pro3:url'];
    this.pros4 = urlMaps['pamf:knee:replacement:pro4:url'];

    this.subscriptions = this
    .appService
    .filterOn("knee:landing:next")
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
  next() {
    let urlParams: any = this.appService.urlParams;
    this.appService.httpGet('knee:landing:next',
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

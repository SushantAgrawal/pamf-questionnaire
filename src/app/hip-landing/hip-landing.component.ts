import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { urlMaps } from '../app.config';

@Component({
  selector: 'app-hip-landing',
  templateUrl: './hip-landing.component.html',
  styleUrls: ['./hip-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HipLandingComponent implements OnInit {
  subscriptions: any;
  kneeprivacypolicy:any;
  termsandconditions:any;
  pros1:any;
  pros2:any;
  pros3:any;
  pros4:any;
  constructor(public appService: AppService, private router: Router) { 

  }

  ngOnInit() {
    this.kneeprivacypolicy = urlMaps['pamf:privacypolicy:url'];
    this.termsandconditions= urlMaps['pamf:termsandconditions:url'];
    this.pros1= urlMaps['pamf:hipreplacementpro1:url'];
    this.pros2= urlMaps['pamf:hipreplacementpro2:url'];
    this.pros3= urlMaps['pamf:hipreplacementpro3:url'];
    this.pros4= urlMaps['pamf:hipreplacementpro4:url']; 
    
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

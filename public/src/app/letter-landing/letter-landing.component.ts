import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
@Component({selector: 'app-letter-landing', templateUrl: './letter-landing.component.html', styleUrls: ['./letter-landing.component.scss'], encapsulation: ViewEncapsulation.None})
export class LetterLandingComponent implements OnInit {
  subscriptions : any;
  code:string;
  constructor(private appService : AppService, private router:Router) {}

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("post:letter:landing")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {            
            let redirectUrl = d.redirectUrl;
            console.log(redirectUrl);
            let route = this.appService.getRoute(redirectUrl);
            this.router.navigate([route]);
          })()
      })
  }

  submitClicked(){
    this.router.navigate(['hipLanding']);
    // this
    // .appService
    // .httpPost('post:letter:landing');
    return(false);
  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

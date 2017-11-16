import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({ selector: 'app-incorrect-tjr', templateUrl: './incorrect-tjr.component.html', styleUrls: ['./incorrect-tjr.component.scss'], encapsulation: ViewEncapsulation.None })
export class IncorrectTjrComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.appService.filterOn('incorrect:tjr:done').subscribe(
      d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.redirectUrl;
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route]);
          })()
      }
    );
  }

  done() {
    this.appService.httpPost('incorrect:tjr:done');
  }
}

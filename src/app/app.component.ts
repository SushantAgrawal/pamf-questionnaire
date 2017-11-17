import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from './app.service';
@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'], encapsulation: ViewEncapsulation.None})
export class AppComponent {
  title = 'app';
  constructor(private appService : AppService, private activatedRoute : ActivatedRoute, private router : Router) {}
  ngOnInit() {
    this
      .appService
      .filterOn('test2')
      .subscribe(d => {
        if (d.error) {
          console.log(d.error);
        } else {
          console.log(d.redirectUrl);
        }
      });
  }

  validate(validateForm) {
    console.log(validateForm);
  }
  post() {
    this
      .appService
      .httpPost('test2');
      return(false);
  }
}

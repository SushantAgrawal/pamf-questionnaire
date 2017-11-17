import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
@Component({selector: 'app-hip-intro', templateUrl: './hip-intro.component.html', styleUrls: ['./hip-intro.component.scss'], encapsulation: ViewEncapsulation.None})
export class HipIntroComponent implements OnInit {

  constructor(private router : Router) {}

  ngOnInit() {}
  next() {
    this
      .router
      .navigate(['hipPage1'])
  }
}

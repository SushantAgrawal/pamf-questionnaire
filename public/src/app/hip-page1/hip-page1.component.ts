import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
@Component({selector: 'app-hip-page1', templateUrl: './hip-page1.component.html', styleUrls: ['./hip-page1.component.scss'], encapsulation: ViewEncapsulation.None})
export class HipPage1Component implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {}
  next() {
    this.router.navigate(['hipPage2'])
  }
}

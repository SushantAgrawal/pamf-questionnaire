import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hip-landing',
  templateUrl: './hip-landing.component.html',
  styleUrls: ['./hip-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HipLandingComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['hipIntro']);
  }
}

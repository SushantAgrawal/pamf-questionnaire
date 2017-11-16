import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-knee-landing',
  templateUrl: './knee-landing.component.html',
  styleUrls: ['./knee-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneeLandingComponent implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['kneeIntro'])
    }

}

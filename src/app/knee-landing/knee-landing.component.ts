import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../app.service';
import { urlMaps } from '../app.config';

@Component({
  selector: 'app-knee-landing',
  templateUrl: './knee-landing.component.html',
  styleUrls: ['./knee-landing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneeLandingComponent implements OnInit {
   kneeprivacypolicy:any;

  constructor(public appService: AppService, private router: Router) {
    
  }
  
    ngOnInit() {
      this.kneeprivacypolicy = urlMaps['pamf:kneeprivacypolicy:url'];
    }
    next() {
      this
        .router
        .navigate(['kneeIntro'])
    }

}

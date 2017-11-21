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
  kneePrivacyPolicy: any;
  termsAndConditions: any;
  pros1: any;
  pros2: any;
  pros3: any;
  pros4: any;
  constructor(public appService: AppService, private router: Router) {

  }

  ngOnInit() {
    this.kneePrivacyPolicy = urlMaps['pamf:privacypolicy:url'];
    this.termsAndConditions = urlMaps['pamf:termsandconditions:url'];
    this.pros1 = urlMaps['pamf:kneereplacementpro1:url'];
    this.pros2 = urlMaps['pamf:kneereplacementpro2:url'];
    this.pros3 = urlMaps['pamf:kneereplacementpro3:url'];
    this.pros4 = urlMaps['pamf:kneereplacementpro4:url'];

  }
  next() {
    this
      .router
      .navigate(['kneeIntro'])
  }

}

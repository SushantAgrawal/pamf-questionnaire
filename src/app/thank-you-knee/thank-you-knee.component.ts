import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { urlMaps } from '../app.config';

@Component({
  selector: 'app-thank-you-knee',
  templateUrl: './thank-you-knee.component.html',
  styleUrls: ['./thank-you-knee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThankYouKneeComponent implements OnInit {
  webSite:any;
  constructor(public appService:AppService) {
    this.webSite= urlMaps['pamf:knee:replacement:website:url'];
   }

  ngOnInit() {

  }

  next(){
    
  }
}

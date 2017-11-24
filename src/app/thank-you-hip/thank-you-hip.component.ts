import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from '../app.service';
import { urlMaps } from '../app.config';
@Component({
  selector: 'app-thank-you-hip',
  templateUrl: './thank-you-hip.component.html',
  styleUrls: ['./thank-you-hip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThankYouHipComponent implements OnInit {
  webSite:any;
  constructor(public appService:AppService) { 
    this.webSite= urlMaps['pamf:hip:replacement:website:url'];
  }

  ngOnInit() {
  }

}

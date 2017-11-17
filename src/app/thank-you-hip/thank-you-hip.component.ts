import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-thank-you-hip',
  templateUrl: './thank-you-hip.component.html',
  styleUrls: ['./thank-you-hip.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThankYouHipComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}

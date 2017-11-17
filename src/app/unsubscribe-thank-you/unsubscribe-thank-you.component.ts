import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { urlMaps } from '../app.config';
@Component({
  selector: 'app-unsubscribe-thank-you',
  templateUrl: './unsubscribe-thank-you.component.html',
  styleUrls: ['./unsubscribe-thank-you.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UnsubscribeThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  exit(){
    window.location.href = urlMaps['pamf:url'];
  }

}

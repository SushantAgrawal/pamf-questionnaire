import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-thank-you-knee',
  templateUrl: './thank-you-knee.component.html',
  styleUrls: ['./thank-you-knee.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThankYouKneeComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}

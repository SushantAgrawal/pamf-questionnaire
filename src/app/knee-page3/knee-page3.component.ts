import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../app.service';
import {kneeQuestion} from '../app.questions';
@Component({
  selector: 'app-knee-page3',
  templateUrl: './knee-page3.component.html',
  styleUrls: ['./knee-page3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage3Component implements OnInit {

  constructor(private router : Router, private appService:AppService) {}  
    ngOnInit() {

    }
    next() {
      this.appService.httpPost('knee:page3:post',)
      // this
      //   .router
      //   .navigate(['kneePage3'])
    }

}

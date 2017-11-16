import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-knee-page3',
  templateUrl: './knee-page3.component.html',
  styleUrls: ['./knee-page3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage3Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['kneePage3'])
    }

}

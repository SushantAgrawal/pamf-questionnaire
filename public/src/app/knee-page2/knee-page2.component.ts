import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-knee-page2',
  templateUrl: './knee-page2.component.html',
  styleUrls: ['./knee-page2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage2Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['kneePage3'])
    }
}

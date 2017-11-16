import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-knee-intro',
  templateUrl: './knee-intro.component.html',
  styleUrls: ['./knee-intro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneeIntroComponent implements OnInit {
  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['kneePage1'])
    }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-hip-page2',
  templateUrl: './hip-page2.component.html',
  styleUrls: ['./hip-page2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HipPage2Component implements OnInit {

  constructor(private router:Router) {}
  
    ngOnInit() {}
    next() {
      this.router.navigate(['hipMandatory'])
    }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-promis-part3',
  templateUrl: './promis-part3.component.html',
  styleUrls: ['./promis-part3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart3Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['promisPart4'])
    }


}

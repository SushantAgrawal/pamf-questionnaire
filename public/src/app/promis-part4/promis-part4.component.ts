import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-promis-part4',
  templateUrl: './promis-part4.component.html',
  styleUrls: ['./promis-part4.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart4Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['promisPart5'])
    }


}

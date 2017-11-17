import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-promis-part1',
  templateUrl: './promis-part1.component.html',
  styleUrls: ['./promis-part1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart1Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['promisPart2'])
    }

}

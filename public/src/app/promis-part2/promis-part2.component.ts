import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-promis-part2',
  templateUrl: './promis-part2.component.html',
  styleUrls: ['./promis-part2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart2Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['promisPart3'])
    }

}

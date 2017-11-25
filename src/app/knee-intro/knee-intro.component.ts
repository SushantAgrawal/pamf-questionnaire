import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-knee-intro',
  templateUrl: './knee-intro.component.html',
  styleUrls: ['./knee-intro.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneeIntroComponent implements OnInit {
  constructor(public appService: AppService, private router: Router) {}
  
    ngOnInit() {}
    next() {
      this
        .router
        .navigate(['kneePage1'], { queryParamsHandling: "merge"})
    }

}

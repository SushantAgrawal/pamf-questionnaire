import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {AppService} from './app.service';
import {Title} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss'], encapsulation: ViewEncapsulation.None})
export class AppComponent {
  constructor(private titleService : Title, public appService : AppService, private activatedRoute : ActivatedRoute, private router : Router) {}
  ngOnInit() {
    this
      .router
      .events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) 
          route = route.firstChild;
        return route;
      })
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
}

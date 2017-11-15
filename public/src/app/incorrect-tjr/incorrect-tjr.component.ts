import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({selector: 'app-incorrect-tjr', templateUrl: './incorrect-tjr.component.html', styleUrls: ['./incorrect-tjr.component.scss'], encapsulation: ViewEncapsulation.None})
export class IncorrectTjrComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  logForm(value) {
    console.log(value);
  }
  done(){
    
  }
}

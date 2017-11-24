import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {collaborate} from '../app.questions';
@Component({selector: 'app-collaborate', templateUrl: './collaborate.component.html', styleUrls: ['./collaborate.component.scss'], encapsulation: ViewEncapsulation.None})
export class CollaborateComponent implements OnInit {
  subscriptions : any;
  @ViewChild('myForm')myForm : any;
  start : boolean = true;
  healthIssues : string;
  matter : string;
  choosingNext : string;
  scores : any[] = [];
  constructor(private router : Router, public appService : AppService) {
    this.scores = [
      {
        key: 1,
        value: 'No effort was made',
        css: 'node1'
      }, {
        key: 2
      }, {
        key: 3
      }, {
        key: 4
      }, {
        key: 5
      }, {
        key: 6
      }, {
        key: 7
      }, {
        key: 8
      }, {
        key: 9,
        value: 'Every effort was made',
        css: 'node-last'
      }
    ];
  }

  ngOnInit() {
    this.subscriptions = this
      .appService
      .filterOn("collaborate:submit")
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            this
              .appService
              .httpGet('collaborate:redirect', {
                code: this.appService.urlParams['c1'],
                bundle: this.appService.urlParams['c2'],
                contact_type: this.appService.urlParams['c4'],
                accessed_by: this.appService.urlParams['c11'],
                complete_date: this.appService.urlParams['c14']
              });
            console.log(d.data);
          })()
      });
    let sub1 = this
      .appService
      .filterOn('collaborate:redirect')
      .subscribe(d => {
        d.error
          ? console.log(d.error)
          : (() => {
            let redirectUrl = d.redirectUrl;
            // let url = new URL(redirectUrl);
            let route = this
              .appService
              .getRoute(redirectUrl);
            this
              .router
              .navigate([route], {queryParamsHandling: "merge"});
          })()
      });
    this
      .subscriptions
      .add(sub1);
  }
  selectRow(value, val) {

    switch (val) {
      case 0:
        this.healthIssues = value;
        break;
      case 1:
        this.matter = value;
        break;
      case 2:
        this.choosingNext = value;
        break;
      default:
    }
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (this.appService.fillCollaborateTopSec(),collaborate.responses[0].answer_text[0] = this.healthIssues, collaborate.responses[0].answer_text_score[0] = this.healthIssues, collaborate.responses[1].answer_text[0] = this.matter, collaborate.responses[1].answer_text_score[0] = this.matter, collaborate.responses[2].answer_text[0] = this.choosingNext, collaborate.responses[2].answer_text_score[0] = this.choosingNext, console.log(collaborate.responses), this.appService.httpPost('collaborate:submit', collaborate));

  }

  ngOnDestroy() {
    this
      .subscriptions
      .unsubscribe();
  }
}

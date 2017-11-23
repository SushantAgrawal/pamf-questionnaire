import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { hipQuestions } from '../app.questions';
// import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from
// "@angular/forms"

@Component({ selector: 'app-hip-page1', templateUrl: './hip-page1.component.html', styleUrls: ['./hip-page1.component.scss'], encapsulation: ViewEncapsulation.None })
export class HipPage1Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  stairs: string;
  surface: string;
  scores: any[] = [];

  constructor(private router: Router) {
    this.scores = [
      { key: 'none', value: 1 },
      { key: 'Mild', value: 2 },
      { key: 'Moderate', value: 3 },
      { key: 'Severe', value: 4 },
      { key: 'Extreme', value: 5 }
    ];
    // this.gender = null;
  }

  ngOnInit() { }
  // change(event, score, value) {   hipQuestions     .responses     .find(x =>
  // x.qx_code === event.srcElement.name)     .answer_text = [];   hipQuestions
  //  .responses     .find(x => x.qx_code === event.srcElement.name)
  // .answer_text_score = [];   hipQuestions     .responses     .find(x =>
  // x.qx_code === event.srcElement.name)     .answer_text     .push(value);
  // hipQuestions     .responses     .find(x => x.qx_code ===
  // event.srcElement.name)     .answer_text_score     .push(score); }
  selectRow(value, val) {
    if (val == 0) { this.stairs = value.key; }
    else { this.surface = value.key; }
  }
  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      hipQuestions.responses[0].answer_text[0] = this.stairs
      , hipQuestions.responses[0].answer_text_score[0] = this.scores[this.stairs]
      , hipQuestions.responses[1].answer_text[0] = this.surface
      , hipQuestions.responses[1].answer_text_score[0] = this.scores[this.surface]
      , this.router.navigate(['hipPage2'])
    );
  }
}

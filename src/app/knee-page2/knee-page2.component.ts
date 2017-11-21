import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { kneeQuestions } from '../app.questions';
@Component({
  selector: 'app-knee-page2',
  templateUrl: './knee-page2.component.html',
  styleUrls: ['./knee-page2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage2Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  pivoting: string;
  straightening: string;
  upDown: string;
  upright: string;
  scores: {} = {
    none: 1,
    Mild: 2,
    Moderate: 3,
    Severe: 4,
    Extreme: 5
  };

  constructor(private router: Router) { }

  ngOnInit() { }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      kneeQuestions.responses[1].answer_text[0] = this.pivoting
      , kneeQuestions.responses[1].answer_text_score[0] = this.scores[this.pivoting]
      ,kneeQuestions.responses[2].answer_text[0] = this.straightening
      , kneeQuestions.responses[2].answer_text_score[0] = this.scores[this.straightening]
      ,kneeQuestions.responses[3].answer_text[0] = this.upDown
      , kneeQuestions.responses[3].answer_text_score[0] = this.scores[this.upDown]
     , kneeQuestions.responses[4].answer_text[0] = this.upright
      , kneeQuestions.responses[4].answer_text_score[0] = this.scores[this.upright]
      ,console.log(kneeQuestions.responses)
      , this
        .router
        .navigate(['kneePage3'])
    );
   
  }
}

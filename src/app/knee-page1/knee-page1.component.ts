import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { kneeQuestions } from '../app.questions';

@Component({
  selector: 'app-knee-page1',
  templateUrl: './knee-page1.component.html',
  styleUrls: ['./knee-page1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage1Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  kneeStiffness: string;
  options: any [] = ['none','Mild','Moderate','Severe','Extreme'];
  scores: {} = {
    none: 1,
    Mild: 2,
    Moderate: 3,
    Severe: 4,
    Extreme: 5
  };
 
  constructor(private router: Router) {    

  }
  ngOnInit() { }
  selectRow(value, val) {
     this.kneeStiffness = value; 
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      kneeQuestions.responses[0].answer_text[0] = this.kneeStiffness.toString()
      , kneeQuestions.responses[0].answer_text_score[0] = this.scores[this.kneeStiffness].toString()
      , this
        .router
        .navigate(['kneePage2'], { queryParamsHandling: "merge"})
    );

  }
}

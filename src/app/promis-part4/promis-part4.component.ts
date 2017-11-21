import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { promisQuestions } from '../app.questions';

@Component({
  selector: 'app-promis-part4',
  templateUrl: './promis-part4.component.html',
  styleUrls: ['./promis-part4.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart4Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  fatigue: string;
  scores: {} = {
    None: 1,
    Mild: 2,
    Moderate: 3,
    Severe: 4,
    "Very Severe": 5
  };
  constructor(private router: Router) { }

  ngOnInit() { }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      promisQuestions.responses[8].answer_text[0] = this.fatigue
      , promisQuestions.responses[8].answer_text_score[0] = this.scores[this.fatigue]
      , console.log(promisQuestions.responses)
      , this
        .router
        .navigate(['promisPart5'])
    );
  }
}

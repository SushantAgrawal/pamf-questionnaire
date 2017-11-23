import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { promisQuestions } from '../app.questions';

@Component({
  selector: 'app-promis-part3',
  templateUrl: './promis-part3.component.html',
  styleUrls: ['./promis-part3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart3Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  emotionalProblems: string;
  scores: any[] = [];


  constructor(private router: Router) {
    this.scores = [
      { key: 'Never', value: 1 },
      { key: 'Rarely', value: 2 },
      { key: 'Sometimes', value: 3 },
      { key: 'Often', value: 4 },
      { key: 'Always', value: 5 }
    ];
  }

  ngOnInit() { }
  selectRow(value, val) {
    this.emotionalProblems = value.key;
  }

    next() {
      this.start = false;
      let thisForm = this.myForm.form;
      thisForm.valid && (
        promisQuestions.responses[7].answer_text[0] = this.emotionalProblems
        , promisQuestions.responses[7].answer_text_score[0] = this.scores[this.emotionalProblems]
        // ,console.log(promisQuestions.responses)
        , this
          .router
          .navigate(['promisPart4'])
      );
    }


  }

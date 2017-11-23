import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { promisQuestions } from '../app.questions';
@Component({
  selector: 'app-promis-part1',
  templateUrl: './promis-part1.component.html',
  styleUrls: ['./promis-part1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart1Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  health: string;
  quality: string;
  physical: string;
  mentalHealth: string;
  social: string;
  activities: string;
  scores: any[] = [];

  constructor(private router: Router) {
    this.scores = [
      { key: 'Excellent', value: 1 },
      { key: 'Very good', value: 2 },
      { key: 'Good', value: 3 },
      { key: 'Fair', value: 4 },
      { key: 'Poor', value: 5 }
    ];
  }
  ngOnInit() { }

  selectRow(value, val) {
    debugger;
    switch (val) {
      case 0:
        this.health = value.key;
        break;
      case 1:
        this.quality = value.key;
        break;
      case 2:
        this.physical = value.key;
        break;
      case 3:
        this.mentalHealth = value.key;
        break;
      case 4:
        this.social = value.key;
        break;
      case 5:
        this.activities = value.key;
        break;
      default:
    }
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      promisQuestions.responses[0].answer_text[0] = this.health
      , promisQuestions.responses[0].answer_text_score[0] = this.scores[this.health]
      , promisQuestions.responses[1].answer_text[0] = this.quality
      , promisQuestions.responses[1].answer_text_score[0] = this.scores[this.quality]
      , promisQuestions.responses[2].answer_text[0] = this.physical
      , promisQuestions.responses[2].answer_text_score[0] = this.scores[this.physical]
      , promisQuestions.responses[3].answer_text[0] = this.mentalHealth
      , promisQuestions.responses[3].answer_text_score[0] = this.scores[this.mentalHealth]
      , promisQuestions.responses[4].answer_text[0] = this.social
      , promisQuestions.responses[4].answer_text_score[0] = this.scores[this.social]
      , promisQuestions.responses[5].answer_text[0] = this.activities
      , promisQuestions.responses[5].answer_text_score[0] = this.scores[this.activities]
      , console.log(promisQuestions.responses)
      , this
        .router
        .navigate(['promisPart2'])
    );
  }
}

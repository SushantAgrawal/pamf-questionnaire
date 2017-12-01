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
  options: any [] = ['Excellent','Very good','Good','Fair','Poor'];
  scores: {} = {
    Excellent: 1,
    "Very good": 2,
    Good: 3,
    Fair: 4,
    Poor: 5
  };

  constructor(private router: Router) {
  }
  ngOnInit() { }

  selectRow(value, val) {

    switch (val) {
      case 0:
        this.health = value;
        break;
      case 1:
        this.quality = value;
        break;
      case 2:
        this.physical = value;
        break;
      case 3:
        this.mentalHealth = value;
        break;
      case 4:
        this.social = value;
        break;
      case 5:
        this.activities = value;
        break;
      default:
    }
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      promisQuestions.responses[0].answer_text[0] = this.health.toString()
      , promisQuestions.responses[0].answer_text_score[0] = this.scores[this.health].toString()
      , promisQuestions.responses[1].answer_text[0] = this.quality.toString()
      , promisQuestions.responses[1].answer_text_score[0] = this.scores[this.quality].toString()
      , promisQuestions.responses[2].answer_text[0] = this.physical.toString()
      , promisQuestions.responses[2].answer_text_score[0] = this.scores[this.physical].toString()
      , promisQuestions.responses[3].answer_text[0] = this.mentalHealth.toString()
      , promisQuestions.responses[3].answer_text_score[0] = this.scores[this.mentalHealth].toString()
      , promisQuestions.responses[4].answer_text[0] = this.social.toString()
      , promisQuestions.responses[4].answer_text_score[0] = this.scores[this.social].toString()
      , promisQuestions.responses[5].answer_text[0] = this.activities.toString()
      , promisQuestions.responses[5].answer_text_score[0] = this.scores[this.activities].toString()
      , this
        .router
        .navigate(['promisPart2'], { queryParamsHandling: "merge"})
    );
  }
}

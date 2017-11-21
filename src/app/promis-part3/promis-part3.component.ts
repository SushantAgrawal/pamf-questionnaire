import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { promisQuestions } from '../app.questions';

@Component({
  selector: 'app-promis-part3',
  templateUrl: './promis-part3.component.html',
  styleUrls: ['./promis-part3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart3Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }
  change(event, score, value) {
    promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text = [];
    promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score = [];
    promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text.push(value);
    promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score.push(score);
  }
  next() {
    this
      .router
      .navigate(['promisPart4'])
  }


}

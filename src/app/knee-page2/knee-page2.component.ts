import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { kneeQuestions } from '../app.questions';
@Component({
  selector: 'app-knee-page2',
  templateUrl: './knee-page2.component.html',
  styleUrls: ['./knee-page2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage2Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    change(event,score,value) {
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text=[];
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score=[];
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text.push(value);
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score.push(score);
    }
    next() {
      this
        .router
        .navigate(['kneePage3'])
    }
}

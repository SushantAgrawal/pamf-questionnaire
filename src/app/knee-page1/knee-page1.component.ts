import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { kneeQuestions } from '../app.questions';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"

@Component({
  selector: 'app-knee-page1',
  templateUrl: './knee-page1.component.html',
  styleUrls: ['./knee-page1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KneePage1Component implements OnInit {
  dvQ1:any = null;

  constructor(private router : Router) {
    this.dvQ1=null;
  }  
    ngOnInit() {}
    change(event,score,value) {
      this.dvQ1=score;
      debugger;
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text=[];
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score=[];
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text.push(value);
      kneeQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score.push(score);
    }
    next() {
      this.dvQ1 && this
        .router
        .navigate(['kneePage2'])
    }
}

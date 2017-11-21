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
  name:string;
  radioTest: FormGroup;
  gender;
  constructor(private router : Router,fb: FormBuilder) {
  }  
    ngOnInit() {}
    change(event,score,value,qx_code) {
      debugger;
      kneeQuestions.responses.find(x => x.qx_code === qx_code).answer_text=[];
      kneeQuestions.responses.find(x => x.qx_code === qx_code).answer_text_score=[];
      kneeQuestions.responses.find(x => x.qx_code === qx_code).answer_text.push(value);
      kneeQuestions.responses.find(x => x.qx_code === qx_code).answer_text_score.push(score);
    }
    next() {
      this
        .router
        .navigate(['kneePage2'])
    }
}

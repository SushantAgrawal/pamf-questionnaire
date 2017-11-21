import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { hipQuestions } from '../app.questions';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"

@Component({selector: 'app-hip-page1', templateUrl: './hip-page1.component.html', styleUrls: ['./hip-page1.component.scss'], encapsulation: ViewEncapsulation.None})
export class HipPage1Component implements OnInit {
  gender:any;
  constructor(private router:Router,fb: FormBuilder) {
    this.gender = null; 
  }

  ngOnInit() {    

  }
  change(event,score,value,qx_code) {
    hipQuestions.responses.find(x => x.qx_code === qx_code).answer_text=[];
    hipQuestions.responses.find(x => x.qx_code === qx_code).answer_text_score=[];
    hipQuestions.responses.find(x => x.qx_code === qx_code).answer_text.push(value);
    hipQuestions.responses.find(x => x.qx_code === qx_code).answer_text_score.push(score);
  }
  next() {
    this.router.navigate(['hipPage2'])
  }
}

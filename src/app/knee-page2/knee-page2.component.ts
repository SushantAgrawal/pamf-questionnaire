import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {kneeQuestions} from '../app.questions';
@Component({selector: 'app-knee-page2', templateUrl: './knee-page2.component.html', styleUrls: ['./knee-page2.component.scss'], encapsulation: ViewEncapsulation.None})
export class KneePage2Component implements OnInit {
  @ViewChild('myForm')myForm : any;
  start : boolean = true;
  pivoting : string;
  straightening : string;
  upDown : string;
  upright : string;
  options: any [] = ['none','Mild','Moderate','Severe','Extreme'];
  scores: {} = {
    none: 1,
    Mild: 2,
    Moderate: 3,
    Severe: 4,
    Extreme: 5
  };
 

  constructor(private router : Router) {   
  }

  ngOnInit() {}
  selectRow(value, val) {
    switch (val) 
    { 
    case 0: 
    this.pivoting = value; 
      break; 
    case 1: 
    this.straightening = value; 
      break; 
    case 2: 
    this.upDown = value; 
      break; 
    case 3: 
    this.upright = value; 
      break; 
    default:       
    } 
  }
  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (      
      kneeQuestions.responses[1].answer_text[0] = this.pivoting.toString()
      , kneeQuestions.responses[1].answer_text_score[0] = this.scores[this.pivoting].toString()
      , kneeQuestions.responses[2].answer_text[0] = this.straightening.toString()
      , kneeQuestions.responses[2].answer_text_score[0] = this.scores[this.straightening].toString()
      , kneeQuestions.responses[3].answer_text[0] = this.upDown.toString()
      , kneeQuestions.responses[3].answer_text_score[0] = this.scores[this.upDown].toString()
      , kneeQuestions.responses[4].answer_text[0] = this.upright.toString()
      , kneeQuestions.responses[4].answer_text_score[0] = this.scores[this.upright].toString()
      // , console.log(kneeQuestions.responses)
      , this.router.navigate(['kneePage3'], { queryParamsHandling: "merge"}));
  }
}

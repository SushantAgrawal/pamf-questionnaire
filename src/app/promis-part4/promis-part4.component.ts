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
  options: any [] = ['none','Mild','Moderate','Severe','Extreme'];
  scores: {} = {
    none: 1,
    Mild: 2,
    Moderate: 3,
    Severe: 4,
    Extreme: 5
  };

  
  constructor(private router: Router) {   
   }

  ngOnInit() { }
  selectRow(value, val) {
    this.fatigue = value; 
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      promisQuestions.responses[8].answer_text[0] = this.fatigue.toString()
      , promisQuestions.responses[8].answer_text_score[0] = this.scores[this.fatigue].toString()

      , this
        .router
        .navigate(['promisPart5'], { queryParamsHandling: "merge"})
    );
  }
}

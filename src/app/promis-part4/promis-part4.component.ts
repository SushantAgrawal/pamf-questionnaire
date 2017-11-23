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
 
  scores: any[] = [];
  
  constructor(private router: Router) {
    this.scores = [
      { key: 'none', value: 1 },
      { key: 'Mild', value: 2 },
      { key: 'Moderate', value: 3 },
      { key: 'Severe', value: 4 },
      { key: 'Very Severe', value: 5 }
    ];
   }

  ngOnInit() { }
  selectRow(value, val) {
    this.fatigue = value.key; 
  }

  next() {
    this.start = false;
    let thisForm = this.myForm.form;
    thisForm.valid && (
      promisQuestions.responses[8].answer_text[0] = this.fatigue
      , promisQuestions.responses[8].answer_text_score[0] = this.scores[this.fatigue]
      , console.log(promisQuestions.responses)
      , this
        .router
        .navigate(['promisPart5'])
    );
  }
}

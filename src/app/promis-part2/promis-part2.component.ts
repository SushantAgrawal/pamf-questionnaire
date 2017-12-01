import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { promisQuestions } from '../app.questions';
@Component({
  selector: 'app-promis-part2',
  templateUrl: './promis-part2.component.html',
  styleUrls: ['./promis-part2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart2Component implements OnInit {
  @ViewChild('myForm') myForm: any;
  start: boolean = true;
  everydayPhysicalActivities: string;
  options: any [] = ['Completely','Mostly','Moderate','A little','Not at all'];
  scores: {} = {
    Completely: 1,
    Mostly: 2,
    Moderate: 3,
    "A little": 4,
    "Not at all": 5
  };
 
  constructor(private router : Router) {
  }
  
    ngOnInit() {}
    selectRow(value, val) {
      this.everydayPhysicalActivities = value; 
    }
  
    next() {
      this.start = false;
      let thisForm = this.myForm.form;
      thisForm.valid && (
        promisQuestions.responses[6].answer_text[0] = this.everydayPhysicalActivities.toString()
        , promisQuestions.responses[6].answer_text_score[0] = this.scores[this.everydayPhysicalActivities].toString()

        , this
          .router
          .navigate(['promisPart3'], { queryParamsHandling: "merge"})
      );
    }

}

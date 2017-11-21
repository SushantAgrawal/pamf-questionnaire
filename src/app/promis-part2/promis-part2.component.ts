import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import { promisQuestions } from '../app.questions';
@Component({
  selector: 'app-promis-part2',
  templateUrl: './promis-part2.component.html',
  styleUrls: ['./promis-part2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromisPart2Component implements OnInit {

  constructor(private router : Router) {}
  
    ngOnInit() {}
    change(event,score,value) {
      promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text=[];
      promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score=[];
      promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text.push(value);
      promisQuestions.responses.find(x => x.qx_code === event.srcElement.name).answer_text_score.push(score);
    }
    next() {
      this
        .router
        .navigate(['promisPart3'])
    }

}

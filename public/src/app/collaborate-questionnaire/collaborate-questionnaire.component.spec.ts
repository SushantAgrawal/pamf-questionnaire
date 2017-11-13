import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateQuestionnaireComponent } from './collaborate-questionnaire.component';

describe('CollaborateQuestionnaireComponent', () => {
  let component: CollaborateQuestionnaireComponent;
  let fixture: ComponentFixture<CollaborateQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaborateQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaborateQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
